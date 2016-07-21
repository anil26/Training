'use strict'
import * as searchActionConstants from './constants';
import * as helpers from './httphelper';
import endPoint from './endpoints';


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
    },
    statusText : ''
  };
};
const fetchFailure=(error)=>{
  return {
    type : searchActionConstants.FETCH_RESPONSE_FAILURE,
    error : error
  };
};

const  getUserRequest=(name,page=1)=>{
  return function(dispatch){
    dispatch(fetchRequest(name));

    var successCallBack=function(response){
      dispatch(fetchSuccess(response));
    }
    var errorCallback = (error) => {
      dispatch(fetchFailure(searchActionConstants.NO_USER_ON_THIS_PAGE));
    };
    var url=endPoint+name+"&page="+page;

    return helpers.get(url,"GET",successCallBack,errorCallback);
  };
}

export {
  getUserRequest
}

