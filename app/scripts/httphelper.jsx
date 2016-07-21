'use strict';

import assignObject from 'object-assign';
import fetch from 'isomorphic-fetch';
import { map } from 'underscore';
import { checkHttpStatus, parseJSON } from '/utils/helpers';

const apiCallHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const checkHttpStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJSON = (response) => {
  return ( response ? response.json() : Promise.resolve({ message: 'Sorry! Something went wrong' }) );
};

const callbackHandler = () => {};

const get = (url, method,successCallback = callbackHandler, errorCallback = callbackHandler) => {

  var options = {
    method  : method,
    headers : assignObject(apiCallHeaders,{}),
  };

  return fetch(url, options)
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(successCallback)
    .catch(errorCallback);
};




export {
  get,
  parseJSON,
  checkHttpStatus
};
