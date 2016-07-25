'use strict'
import React from 'react';
import * as TypeRacerActionConstants from './constants';
import endPoint from './endpoints';
import { get } from './httphelper';
const setWrongState = (index) => {
  return {
    type : TypeRacerActionConstants.SET_WRONG_STATE,
    payload : {
      index : index
    }
  }
}

const setRightState = (index) => {
  return {
    type : TypeRacerActionConstants.SET_RIGHT_STATE,
    payload : {
      index : index
    }
  }
}

const fetchRequest = () => {
  return {
    type : TypeRacerActionConstants.FETCH_REQUEST
  }
}

const fetchSuccess = (response) => {
  return {
    type : TypeRacerActionConstants.FETCH_SUCCESS,
    payload : {
      data : response
    }
  }
}
const fetchFailure = (error) => {
  return {
    type : TypeRacerActionConstants.FETCH_FAILURE,
    payload : {
      error : error
    }
  }
}
const getRandomText = () => {
  return function(dispatch){
    dispatch(fetchRequest());
    var successCallBack=function(response){
      dispatch(fetchSuccess(response.text_out));
    }
    var errorCallback = (error) => {
      dispatch(fetchFailure(error));
    };
    return get(endPoint,successCallBack,errorCallback);
  }
}



export {
  setRightState,
  setWrongState,
  getRandomText
}
