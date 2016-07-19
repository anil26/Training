'use strict';

import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import  { makeRequest } from './actions';
/**
 * Core Javascript file for the application which renders root component
 * inside the HTMLElement with 'appContainer' Id.
 */
window.__INITIAL_STATE__ = {
  currentRequest : {
    url : "",
    method : "",
    date : new Date(),
    data : null
  },
  requestHistory :[],
  statusText : ""
};

const middlewares=[thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = compose(middlewareEnhancer,window.devToolsExtension ? window.devToolsExtension() : f => f );
const store = createStore(reducer, window.__INITIAL_STATE__, enhancers);
store.dispatch(makeRequest('http://www.google.com',"HEAD"));
render(<Root store={ store }/>, document.querySelector('#appContainer'));
