'use strict'
import * as searchActionConstants from './constants';
import * as helpers from './httphelper';
import endPoint from './endpoints';


const fetchRequest=(name,page)=>{
  return {
    type : searchActionConstants.FETCH_REQUEST,
    payload :{
      name : name,
      page :page
    }

  }
}

const fetchSuccess=(data,page)=>{
  return {
    type : searchActionConstants.FETCH_RESPONSE_SUCCESS,
    payload : {
      data : data,
      page : page
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

const parseInput=(name)=>{
  return name.trim();
}

const  getUserRequest=(name,page=1)=>{
  var name=parseInput(name);
    return function(dispatch){
    dispatch(fetchRequest(name,page));

    var successCallBack=function(response){
      dispatch(fetchSuccess(response,page));
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

