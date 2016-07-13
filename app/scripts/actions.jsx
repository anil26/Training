'use strict'
import * as authActionConstants from './constants';


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
const httpService={
  get: function(url,options,successCallBack,failureCallBack){
    return fetch(url)
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(successCallBack)
    .catch(failureCallBack);

  }
}
const loginRequest=(payload)=>{
  return {
    type : authActionConstants.LOGIN_USER_REQUEST,
    payload : payload,
    isAuthenticated : false
  }
}

const loginSuccess=(userObject)=>{
  return {
    type :authActionConstants.LOGIN_USER_SUCCESS,
    isAuthenticated : true,
    statusText : "Logged in successfully",
    currentUser : userObject
  }
}
const loginFailure=()=>{
  return {
    type : authActionConstants.LOGIN_USER_FAILURE,
    isAuthenticated : false,
    statusText : "Failed to Login"
  }
}

function checkAfterResponse(response,userObject){
  var filteredArray =response.users.filter(function(value,index,array){
    return (value.email===userObject.email && value.password===userObject.password);
  });
  return filteredArray.length;
}


function apiaryCallToGetAndVerify(userObject,url){
  return function(dispatch){
    dispatch(loginRequest());
    var successCallBack=(response)=>{
      if(checkAfterResponse(response,userObject)!==0){

        dispatch(loginSuccess(userObject));
      }
      else{
        dispatch(loginFailure());
      }
    }
    var failureCallBack=(response)=>{
      dispatch(loginFailure());
    }
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      };
      var data={};
      var options={
        headers : headers,
        method : 'GET',
        body : data
    }

  return httpService.get(url,options,successCallBack,failureCallBack);
  }
}

export {
  loginRequest,
  loginFailure,
  loginSuccess,
  apiaryCallToGetAndVerify
}

