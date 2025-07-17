/* eslint-disable indent */
const toFiles = require('./toFiles');
const toMethodName = require('./resourceName');
const ruleComponentsName = 'rule_components';
const pages = { 'page[size]': 999 };

function formArgs(resourceType, settings, cliArgs) {
  return {
    propertyId: settings.propertyId,
    reactor: settings.reactor,
    propertyPath: `./${settings.propertyId}`,
    dataElementsPath: `${settings.propertyId}/${resourceType}`,
    friendlyNames: cliArgs && cliArgs.friendlyNames
  };
}

function writeRemaining(data, resourceType, settings, cliArgs) {
  if (data.constructor.name == 'Array') {
    data.forEach(resource => toFiles(resource, formArgs(resourceType, settings, cliArgs)));
  } else { toFiles(data, formArgs(resourceType, settings, cliArgs)); }
}

function writeRuleComponent(resourceTypes, resourceType, adobeResources, settings, cliArgs) {
  for (let rule of adobeResources) {
    settings.reactor.listRuleComponentsForRule(rule.id, pages)
      .then((adobeRuleComponents) => {
        writeRemaining(adobeRuleComponents, resourceType, settings, cliArgs);
      });
  }
}

function writeRuleComponentOr(resourceTypes, resourceType, adobeResources, settings, cliArgs) {
  if (resourceType === 'rule' && resourceTypes.includes(ruleComponentsName))
    writeRuleComponent(resourceTypes, resourceType, adobeResources, settings, cliArgs);
}

function writeAll(resourceTypes, resourceType, adobeResources, settings, cliArgs) {
  writeRuleComponentOr(resourceTypes, resourceType, adobeResources, settings, cliArgs);
  writeRemaining(adobeResources, resourceType, settings, cliArgs);
}

function getPropertyOr(resourceName) {
  if (resourceName === 'Property') return 'getProperty';
  return `list${resourceName}ForProperty`;
}

function listResources(settings, resourceName, resourceType, resourceTypes, cliArgs) {
  settings.reactor[`${getPropertyOr(resourceName)}`](settings.propertyId, pages)
    .then(({ data: adobeResources }) =>
      writeAll(resourceTypes, resourceType, adobeResources, settings, cliArgs)
    );
}

function writeResources(resourceTypes, settings, cliArgs) {
  resourceTypes.forEach((resourceType, index, resourceTypes) => {
    if (resourceType === ruleComponentsName) return;
    const resourceName = toMethodName(resourceType, false);

    try {
      return listResources(settings, resourceName, resourceType, resourceTypes, cliArgs);
    } catch (error) {
      console.error('🚨Error in writeResources(): ', error);
    }
  });
}

module.exports = writeResources;