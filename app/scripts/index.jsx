'use strict';

import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import localStorageMiddleware from './localstoragemiddleware';
import searchReducer from './reducer';
import { getUserRequest } from './actions';


const requestPastSearchFromLocalStorage=()=>{
  var isThereHistory=localStorage.getItem("pastSearch");
  debugger;
  if(isThereHistory===null)
    return [];
  var parsedJSON=JSON.parse(isThereHistory);
  return parsedJSON;

}


window.__INITIAL_STATE__ = {
  currentResultSet : {
    currentResult : [],
    isFetching : false,
    isFetched : false
  },
  pastSearch:requestPastSearchFromLocalStorage(),
  currentSearch:""
};

const middlewares = [thunk,localStorageMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = compose(middlewareEnhancer,window.devToolsExtension ? window.devToolsExtension() : f => f );
const store = createStore(searchReducer, window.__INITIAL_STATE__, enhancers);
render(<Root store={ store } />, document.querySelector('#appContainer'));
