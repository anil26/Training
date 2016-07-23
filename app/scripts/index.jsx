'use strict';

import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App  from './App';
import { t3 } from './constants';
import TypeRacerReducer from './reducer';
// window.__INITIAL_STATE__ = {
//   text : [];

//
// };
window.__INITIAL_STATE__={
  randomText:t3.split(" "),
  wordPosition : 0,
  isWrongWord : false,
  currentWord : {
    index : 0,
  },
  statusText:''
}

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = compose(middlewareEnhancer,window.devToolsExtension ? window.devToolsExtension() : f => f );
const store = createStore(TypeRacerReducer, window.__INITIAL_STATE__, enhancers);
debugger;
render(<Root store={store}/>, document.querySelector('#appContainer'));
