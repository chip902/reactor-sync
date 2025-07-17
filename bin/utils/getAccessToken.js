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

const { default: fetch } = require('node-fetch-cjs');

async function checkAccessToken(args) {
  if (!args.accessToken)
    return await getAccessToken(args);
}

async function getAccessToken(settings) {
  const integration = settings.integration;
  const environment = settings.environment;

  // check to make sure we have all of the correct information in the settings file
  if (!integration) {
    throw Error('settings file does not have an "integration" property.');
  }
  if (!integration.clientId) {
    throw Error('settings file does not have an "integration.clientId" property.');
  }
  if (!integration.clientSecret) {
    throw Error('settings file does not have an "integration.clientSecret" property.');
  }
  if (!integration.payload) {
    throw Error('settings file does not have an "integration.payload" property.');
  }
  if (!environment) {
    throw Error('settings file does not have an "environment" property.');
  }
  if (!environment.jwt) {
    throw Error('settings file does not have an "environment.jwt" property.');
  }

  // OAuth 2.0 Client Credentials flow (Modern Adobe authentication)
  const clientId = integration.clientId;
  const clientSecret = integration.clientSecret;
  const tokenUrl = 'https://ims-na1.adobelogin.com/ims/token/v3';

  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      scope: 'AdobeID,openid,read_organizations,additional_info.job_function,additional_info.projectedProductContext,additional_info.roles'
    })
  });

  if (!response.ok) {
    throw new Error(`Error fetching access token: ${response.statusText}`);
  }

  const data = await response.json();
  return data.access_token;
}

module.exports = checkAccessToken;