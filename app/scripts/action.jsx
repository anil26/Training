'use strict'
import React from 'react';
import * as TypeRacerActionConstants from './constants';
 // t3,
 //  SET_RIGHT_STATE,
 //  SET_WRONG_STATE,
 //  FETCH_FAILURE,
 //  FETCH_REQUEST,
 //  FETCH_SUCCESS
const setWrongState=(index)=>{
  return {
    type : TypeRacerActionConstants.SET_WRONG_STATE,
    payload : {
      index : index
    }
  }
}

const setRightState=(index)=>{
  return {
    type : TypeRacerActionConstants.SET_RIGHT_STATE,
    payload : {
      index : index
    }
  }
}

const fetchRequest=()=>{
  return {
    type : TypeRacerActionConstants.FETCH_REQUEST
  }
}

const fetchSuccess=(response)=>{
  return {
    type : TypeRacerActionConstants.FETCH_SUCCESS,
    payload : {
      data : response
    }
  }
}
const fetchFailure=(error)=>{
  return {
    type : TypeRacerActionConstantss.FETCH_FAILURE,
    payload : {
      error : error
    }
  }
}
// const getRandomText(){

// }



export {
  setRightState,
  setWrongState
}
