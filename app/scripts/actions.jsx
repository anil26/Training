'use strict'
import * as searchActionConstants from './constants';
import * as helpers from './httphelper';
import endPoint from './endpoints';
// FETCH_REQUEST,
//   FETCH_RESPONSE_SUCCESS,
//   FETCH_RESPONSE_FAILURE,
//   CHANGE_PAGE
const perPage=100;
const fetchRequest=(name)=>{
  return {
    type : searchActionConstants.FETCH_REQUEST,
    payload :{
      name : name
    }
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

const  getUserRequest=(name,page=1,perPage=perPage)=>{
  return function(dispatch){
    dispatch(fetchRequest(name));

    var successCallBack=function(response){
      dispatch(fetchSuccess(response));
    }
    var errorCallback = (error) => {
      helpers.parseJSON(error.response).then((resp) => {
        dispatch(fetchFailure({ statusText: resp.message }));
      });
    };
    var url=endPoint+name+"&page="+page+"&per_page="+ perPage;
    debugger;
    return helpers.get(url,"GET",successCallBack,errorCallback);
  };
}

export {
  getUserRequest
}

