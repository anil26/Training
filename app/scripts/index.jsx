'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { routerMiddleware,rootReducer } from 'react-router-redux';
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
var reducer=combineReducers({authReducer : authReducer,routing : rootReducer});
var middleWare=applyMiddleware(thunk,routerMiddleware(browserHistory));
var createStoreWithMiddleWare=compose(middleWare,window.devToolsExtension ? window.devToolsExtension() : f => f);
const store=createStoreWithMiddleWare(createStore)(reducer,window.__INITIALSTATE__);
console.log(store.getState());
ReactDOM.render(<Root store={store} />,document.querySelector('#appContainer'));


