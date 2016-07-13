'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import authReducer from './reducer';
import createLogger from 'redux-logger';
import Root from './components/Root';
import { applyMiddleware, compose, createStore ,combineReducers } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
window.__INITIALSTATE__={
  auth : {
    isAuthenticated : false
  },
  currentUser : {}
}

var middleWare=applyMiddleware(thunk,routerMiddleware(browserHistory));
var createStoreWithMiddleWare=compose(middleWare,window.devToolsExtension ? window.devToolsExtension() : f => f);

const store=createStoreWithMiddleWare(createStore)(authReducer,window.__INITIALSTATE__);
// const store=createStore(authReducer,window.__INITIALSTATE__);
debugger;
console.log(store);
console.log(store.liftedStore.getState());
// store.liftedStore.getState().committedState
ReactDOM.render(<Root store={store.liftedStore} />,document.querySelector('#appContainer'));


