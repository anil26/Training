'use strict'
import * as searchActionConstants from './constants';
import * as helpers from './httphelper';
import endPoint from './endpoints';
// FETCH_REQUEST,
//   FETCH_RESPONSE_SUCCESS,
//   FETCH_RESPONSE_FAILURE,
//   CHANGE_PAGE
const fetchRequest=()=>{
  return {
    type : searchActionConstants.FETCH_REQUEST,
  }
}

const fetchSuccess=(data)=>{
  return {
    type : searchActionConstants.FETCH_RESPONSE_SUCCESS,
    payload : {
      data : data,
    }
  };
};
const fetchFailure=(error)=>{
  return {
    type : searchActionConstants.FETCH_RESPONSE_FAILURE,
    error : error
  };
};

const  getUserRequest=(name)=>{
  return function(dispatch){
    dispatch(fetchRequest());

    var successCallBack=function(response){
      dispatch(fetchSuccess(response));
    }
    var errorCallback = (error) => {
      helpers.parseJSON(error.response).then((resp) => {
        dispatch(fetchFailure({ statusText: resp.message }));
      });
    };
    var url=endPoint+"name";
    return helpers.get(url,"GET",successCallBack,errorCallback);
  };
}


