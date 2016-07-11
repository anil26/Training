'use strict'
import  fetch from 'isomorphic-fetch';
import { APPID } from './keys';
import * as weatherActions from './constants.jsx';
import ReactDOM from 'react-dom';

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

var httpservice={
  get: function(url,options,successcallback,failureCallBack){


    return fetch(url)
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(successcallback)
    .catch(failureCallBack);

  }
}

const UrlForWeatherByName=(city)=>{
return 'http://api.openweathermap.org/data/2.5/weather?q=' + city +'&mode=json&type=accurate'+'&units=metric&APPID='+ APPID;
}

const dataFromStore=(data)=>{
  return {
    type : weatherActions.DATA_FETCH_REQUEST_FROM_STATE,
    data :data
  }
}

const dataRequest=()=>{
  return {
    type :weatherActions.DATA_FETCH_REQUEST_FROM_CALL
  }
}

const dataSuccess=(data)=>{
  return {
    type: weatherActions.DATA_FETCH_SUCCESS_FROM_CALL,
    data :data,
    statusText : "Data fetched successfully"
  }
}

const dataFailure=(error)=>{
  let errorMessage = ( error || {} ).statusText || 'DEFAULT_ERROR_MESSAGE';

  return {
    type : weatherActions.DATA_FETCH_FAILURE_FROM_CALL,
    statusText : errorMessage
  }
}

function searchinArray(array,keyword){

 for(var obj in array){

  if(array[obj].name.toLowerCase()==keyword.toLowerCase()){
    return obj;
  }
 }
 return -1;
}


function asyncGetData(url){

  // var dispatch=store.dispatch
  return function(dispatch){
      //return httpservice.get(url,options,failureCallBack,successcallback);
      dispatch(dataRequest());
      var failureCallBack=(error)=>{
        return dispatch(dataFailure(error));
      }
      var successcallback=(response)=>{


        return dispatch(dataSuccess(response));
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


      return httpservice.get(url,options,successcallback,failureCallBack);

  }
}

function getData(store,city){

var weatherList=store.getState().properties.weatherList;

  var index=searchinArray(weatherList,city)

    if(index!==-1)
      return store.dispatch(dataFromStore(weatherList[index]));
  return asyncGetData(UrlForWeatherByName(city))(store.dispatch);
}

export {
  getData
}
