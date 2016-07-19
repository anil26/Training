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

const callHeaders={
  'Accept': 'application/json,text/html',
  'Content-Type': 'text/html',
  'mode' : 'no-cors'
};

const dataFetchRequest=(url,options)=>{
  return {
    type : httpMethodCreator.MAKE_REQUEST,
    statusText : " Requesting via " + options.method,
    date : new Date(),
    url : url,
    method : options.method
  }
};

const dataFetchSuccess=(response)=>{
  return {
    type : httpMethodCreator.REQUEST_SUCCESS,
    payload : {
      data : response
    },
    statusText : "DATA_SUCCESS"

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


var getResponseBody=(response)=>{
  var decoder=new TextDecoder();
  var reader=response.body.getReader();
  var html="";
  return reader.read().then(function process(result){
    if(result.done){
      return dataFetchSuccess(html);
    }
    html+=decoder.decode(result.value,{stream : true});
    return reader.read().then(process);
  }).then(function(result){
    return Promise.resolve(result);
  });
}

function makeRequest(url,method){
    return function(dispatch){

      var options={
        method : method,
        headers : assignObject(callHeaders),
      }
      dispatch(dataFetchRequest(url,options));
      var successCallBack=(response)=>{
        console.log(Object.keys(response));
         return dispatch(response);
      }
      var failureCallBack=(error)=>{
        let errorMessage = ( error || {} ).statusText || httpMethodCreator.DEFAULT_ERROR_MESSAGE;
          return dispatch(dataFetchFailure(errorMessage));
      }
      return fetch(url,options)
      .then(checkHttpStatus)
      .then(getResponseBody)
      .then(successCallBack)
      .catch(failureCallBack);
  }

}

export {
  makeRequest
}