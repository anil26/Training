'use strict';

import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App  from './App';
import TypeRacerReducer from './reducer';
import { getRandomText } from './action';

window.__INITIAL_STATE__={
  randomText:[],
  isWrongWord : false,
  currentWord : {
    index : 0,
  },
  statusText:'',
  textFieldDisabled : true
}

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = compose(middlewareEnhancer,window.devToolsExtension ? window.devToolsExtension() : f => f );
const store = createStore(TypeRacerReducer, window.__INITIAL_STATE__, enhancers);
store.dispatch(getRandomText());
render(<Root store={store}/>, document.querySelector('#appContainer'));
