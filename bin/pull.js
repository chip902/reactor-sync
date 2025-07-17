const ora = require('ora');
const writeResources = require('./utils/writeResources');
const checkAccessToken = require('./utils/getAccessToken');
const checkArgs = require('./utils/checkArgs');
const getReactor = require('./utils/getReactor');
const resourceTypes = ['data_elements', 'extensions', 'rules', 'rule_components', 'environments'];


function startSpinner() {
  const spinner = ora('Pulling Resources \n');
  spinner.color = 'blue';
  return spinner.start();
}

async function setSettings(args) {
  const settings = checkArgs(args);
  settings.accessToken = await checkAccessToken(settings);
  settings.reactor = await getReactor(settings);
  return settings;
}

async function pull(args) {
  const spinner = startSpinner();
  const settings = await setSettings(args);
  // Pass the args to writeResources so we can access friendlyNames flag
  writeResources(resourceTypes, settings, args);
  spinner.stop();
}

module.exports = pull;
