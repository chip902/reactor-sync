/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const fs = require('fs');
const { mkdirp } = require('mkdirp');
const sanitize = require('sanitize-filename');

function checkCreateDir(localPath) {
  if (!fs.existsSync(localPath)) {
    mkdirp.sync(localPath);
  }
  return true;
}

function getLocalPath(data, args) {
  const propertyPath = `./${args.propertyId}`;
  let localPath = `${propertyPath}/${data.type}/${data.id}`;
  let localDirectory = `${propertyPath}/${data.type}`;

  // If friendly names option is enabled and name is available
  if (args.friendlyNames && data.attributes && data.attributes.name) {
    // Create a business-friendly folder structure
    const typeSingular = data.type.endsWith('s') ? data.type.slice(0, -1) : data.type;
    const friendlyName = sanitize(data.attributes.name, { replacement: '_' });

    // Preserve the ID at the end for uniqueness
    const friendlyPath = `${friendlyName}_${data.id.substring(0, 8)}`;

    // Create a friendly subfolder inside the type directory
    localPath = `${propertyPath}/${data.type}/${friendlyPath}`;
    // Main directory doesn't change
    localDirectory = `${propertyPath}/${data.type}`;
  }

  return {
    'localPath': localPath,
    'localDirectory': localDirectory,
    'originalId': data.id
  };
}

function sanitizeName(data) {
  // create a name that links to the original file
  if (data.attributes.name) {
    // Remove the leading underscore to make names more friendly
    return sanitize(data.attributes.name, {
      replacement: '_'
    });
  }
}

function makeSymLink(localDirectory, sanitizedName, data, originalId) {
  // Ensure the directory exists
  checkCreateDir(localDirectory);

  // Check if the symlink already exists - safely handle with try/catch
  try {
    // For backwards compatibility, always create symlinks with and without leading underscore
    const symlinks = [`${localDirectory}/_${sanitizedName}`, `${localDirectory}/${sanitizedName}`];

    for (const symlinkPath of symlinks) {
      if (fs.existsSync(symlinkPath)) {
        // If it exists, check if it's a symlink
        const stats = fs.lstatSync(symlinkPath);
        if (stats.isSymbolicLink()) {
          continue; // Already exists, don't recreate
        }
      }
      // Create the symlink - pointing to either ID-based or friendly directory as needed
      const targetPath = originalId || data.id;
      fs.symlinkSync(`${localDirectory}/${targetPath}`, symlinkPath, 'dir');
    }
  } catch (error) {
    // Log the error but don't stop execution
    console.error(`Warning: Could not create symlink for ${sanitizedName}: ${error.message}`);
  }
}

function sanitizeLink(data, localDirectory, originalId) {
  const sanitizedName = sanitizeName(data);
  if (sanitizedName) {
    makeSymLink(localDirectory, sanitizedName, data, originalId);
  }
}

function writeDataJson(localPath, data) {
  fs.writeFileSync(
    `${localPath}/data.json`,
    JSON.stringify(data, null, '  ')
  );
}

function getSettings(data, localPath) {
  const settings = JSON.parse(data.attributes.settings);

  if (settings) {
    fs.writeFileSync(
      `${localPath}/settings.json`,
      JSON.stringify(settings, null, '  ')
    );
    return settings;
  }
}

async function toFiles(data, args) {
  const reactor = args.reactor;
  const { localPath, localDirectory, originalId } = getLocalPath(data, args);

  // Make sure both directories exist
  checkCreateDir(localDirectory);
  checkCreateDir(localPath);

  sanitizeLink(data, localDirectory, originalId);
  writeDataJson(localPath, data);

  // If using friendly names, add a reference file that makes it clear which ID this corresponds to
  if (args.friendlyNames && data.attributes && data.attributes.name) {
    fs.writeFileSync(
      `${localPath}/.id-reference`,
      `Original ID: ${data.id}\nName: ${data.attributes.name}\nType: ${data.type}\n`
    );
  }

  // if the data has settings, make changes to it
  if (data.attributes.settings) {
    const settings = getSettings(data, localPath);

    if (settings) {
      let transforms;

      // dataElements
      if (data.type === 'data_elements') {
        if (
          data.relationships.updated_with_extension_package &&
          data.relationships.updated_with_extension_package.data
        ) {
          const extensionPackage = (await reactor.getExtensionPackage(
            data.relationships.updated_with_extension_package.data.id
          )).data;

          // data elements
          let items = extensionPackage.attributes.data_elements;

          // find the correct rule_component that goes with this type
          transforms = items.find((item) => (
            item.id === data.attributes.delegate_descriptor_id
          )).transforms;
        }

        // property
      } else if (data.type === 'property') {
        return;
      } else if (data.type === 'extensions') {
        if (
          data.relationships.extension_package &&
          data.relationships.extension_package.data
        ) {
          const extensionPackage = (await reactor.getExtensionPackage(
            data.relationships.extension_package.data.id
          )).data;

          // transforms - add null checks for modern extensions that may have different structure
          if (extensionPackage.attributes.configuration) {
            transforms = extensionPackage.attributes.configuration.transforms || null;
          } else {
            // Handle modern extensions without configuration.transforms
            console.log(`Warning: Extension package ${extensionPackage.id} doesn't have configuration.transforms`);
            transforms = null;
          }
        }

        // rule_components
      } else if (data.type === 'rule_components') {
        if (
          data.relationships.updated_with_extension_package &&
          data.relationships.updated_with_extension_package.data
        ) {
          let items;
          const extensionPackage = (await reactor.getExtensionPackage(
            data.relationships.updated_with_extension_package.data.id
          )).data;

          // if actions
          if (
            data.attributes.delegate_descriptor_id.indexOf('::actions::') !== -1 &&
            extensionPackage.attributes.actions
          ) {
            items = extensionPackage.attributes.actions;
            // if events
          } else if (
            data.attributes.delegate_descriptor_id.indexOf('::events::') !== -1 &&
            extensionPackage.attributes.events
          ) {
            items = extensionPackage.attributes.events;
            // if conditions
          } else if (
            data.attributes.delegate_descriptor_id.indexOf('::conditions::') !== -1 &&
            extensionPackage.attributes.conditions
          ) {
            items = extensionPackage.attributes.conditions;
          }
          // find the correct rule_component that goes with this type
          transforms = items.find((item) => (
            item.id === data.attributes.delegate_descriptor_id
          )).transforms;
        }
      }

      if (transforms) {
        const get = function (path, obj) {
          var
            parts,
            part,
            value = '',
            i, il;

          // break into parts
          parts = path.split('.');

          // loop through parts
          for (i = 0, il = parts.length; i < il; i++) {
            part = parts[i];

            // if that path exists
            if (obj[part]) {
              // if it is the last part
              if (i === il - 1) {
                value = obj[part];
                // otherwise drop down
              } else {
                obj = obj[part];
              }
            } else {
              break;
            }
          }

          return value;
        };

        // loop through and make the transform and save
        transforms.forEach(function (transform) {
          var value;

          // get the value
          value = get(transform.propertyPath, settings);

          // if we didn't get anything back
          if (!value) return;

          // function 
          if (transform.type === 'function') {

            value = `//==== START TRANSFORM CODE - DO NOT REMOVE ====
function (${transform.parameters ? transform.parameters.join(', ') : ''}) {
//==== END TRANSFORM CODE ====
${value}
//==== START TRANSFORM CODE - DO NOT REMOVE ====
}
//==== END TRANSFORM CODE ====`;

            // write the settings file.
            fs.writeFileSync(
              `${localPath}/settings.${transform.propertyPath}.js`,
              value
            );

            // file or customCode
          } else if (
            transform.type === 'file' ||
            transform.type === 'customCode'
          ) {
            // write the settings file.
            fs.writeFileSync(
              `${localPath}/settings.${transform.propertyPath}.js`,
              value
            );
          } else if (transform.type === 'remove') {
            // this transform type is used by the Adobe Analytics extension
            // with the trackerProperties and libraryCode.company propertyPaths
            return;
          } else {
            throw new Error('unrecognized transform: ', transform);
          }
        });
      }
    }
  }
}

module.exports = toFiles;