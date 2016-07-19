'use strict'
import * as httpMethodCreator from './constants';
import fetch from 'isomorphic-fetch';
import assignObject from 'object-assign';

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

const callHeaders={};

const dataFetchRequest=(url,options)=>{
  return {
    type : httpMethodCreator.MAKE_REQUEST,
    statusText : " Requesting via " + options.method,
    date : new Date(),
    url : url,
    method : options.method
  }
};

const dataFetchSuccess=(data)=>{
  return {
    type : httpMethodCreator.REQUEST_SUCCESS,
    payload : {
      data : data
    }
  }
};
const dataFetchFailure=(error)=>{
  return {
    type : httpMethodCreator.REQUEST_FAILURE,
    payload : {
      statusText : error
    }
  };
};


function makeRequest(url,method){
    return function(dispatch){

      var options={
        method : method,
        headers : assignObject(callHeaders)
      }
      dispatch(dataFetchRequest(url,options));
      var successCallBack=(response)=>{

        dispatch(dataFetchSuccess(response));
      }
      var failureCallBack=(error)=>{
         let errorMessage = ( error || {} ).statusText || httpMethodCreator.DEFAULT_ERROR_MESSAGE;
          dispatch(dataFetchFailure(errorMessage));
      }
      return fetch(url,options)
      .then(checkHttpStatus)
      .then(successCallBack)
      .catch(failureCallBack);

    }

}

export {
  makeRequest
}