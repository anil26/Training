'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { routerMiddleware,rootReducer } from 'react-router-redux';
import auth from './reducer';
import createLogger from 'redux-logger';
import Root from './components/Root';
import { applyMiddleware, compose, createStore ,combineReducers } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
window.__INITIALSTATE__={
  auth : {
    isAuthenticated : false,
    isAuthenticating : false,
    statusText : true,
    currentUser : {}
  }
}
var reducer=combineReducers({auth : auth,routing : rootReducer});
var middleWare=applyMiddleware(thunk,routerMiddleware(browserHistory));
var createStoreWithMiddleWare=compose(middleWare,window.devToolsExtension ? window.devToolsExtension() : f => f);
const store=createStoreWithMiddleWare(createStore)(reducer,window.__INITIALSTATE__);
ReactDOM.render(<Root store={store} />,document.querySelector('#appContainer'));


