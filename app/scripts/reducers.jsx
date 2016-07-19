'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import * as httpMethodCreator from './constants';

var initialState={
  currentRequest : {
    url : null,
    method : null,
    date : new Date(),
    data : null
  },
  requestHistory :[],
  statusText : ""
}
const reducer=(state=initialState,action)=>{
  switch(action.type){
    case httpMethodCreator.MAKE_REQUEST :
      var object=Object.assign({},state);
      object.currentRequest={
        url : action.url,
        method : action.method,
        date : action.date
      }
      object.statusText=action.statusText;
      object.requestHistory.push(object.currentRequest);
      return object;
    case httpMethodCreator.REQUEST_SUCCESS :
      var object=Object.assign({},state);
      object.currentRequest.data=action.payload.data;
      object.statusText=action.statusText;
      return object;

    case httpMethodCreator.REQUEST_FAILURE :
      var object=Object.assign({},state);
      object.statusText=action.payload.statusText;
      return object;
    default :
      return state;
  }
}

export default reducer;