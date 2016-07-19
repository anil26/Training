'use strict';

import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import  { makeRequest } from './actions';
import localStorageMiddleware from './localstoragemiddleware';
/**
 * Core Javascript file for the application which renders root component
 * inside the HTMLElement with 'appContainer' Id.
 */
const requestHistoryFromLocalStorage=()=>{
  var isThereHistory=localStorage.getItem("requestHistory");
  if(isThereHistory===null)
    return [];
  var parsedJSON=JSON.parse(isThereHistory);
  return parsedJSON;

}
window.__INITIAL_STATE__ = {
  currentRequest : {
    url : "",
    method : "",
    date : new Date(),
    data : null
  },
  requestHistory :requestHistoryFromLocalStorage(),
  statusText : ""
};

const middlewares=[thunk,localStorageMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = compose(middlewareEnhancer,window.devToolsExtension ? window.devToolsExtension() : f => f );
const store = createStore(reducer, window.__INITIAL_STATE__, enhancers);
render(<Root store={ store }/>, document.querySelector('#appContainer'));
