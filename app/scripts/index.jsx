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



// Lorem ipsum augue fringilla aenean himenaeos elementum mollis vulputate, justo varius himenaeos inceptos quisque facilisis taciti, nec hac venenatis sem vehicula condimentum placerat.
// Fames etiam justo litora condimentum luctus lectus nisl suscipit lectus eleifend, nisl litora elementum aptent id egestas platea justo suscipit cras neque, ullamcorper lectus purus taciti leo vitae blandit ante libero.
// Mattis enim ornare pulvinar lorem sagittis sit hac etiam, neque lacus nibh metus eget venenatis curabitur facilisis aptent, purus tellus venenatis pretium sit eros cubilia.
// Mauris litora facilisis cras curabitur at cras sapien consequat ornare, suscipit velit vestibulum condimentum proin purus pretium semper, blandit non odio duis sed praesent fermentum scelerisque litora mauris donec rhoncus tempus taciti eros risus.

var r="Lorem ipsum augue fringilla aenean himenaeos elementum mollis vulputate, justo varius himenaeos inceptos quisque facilisis taciti, nec hac venenatis sem vehicula condimentum placerat. Fames etiam";
var r1=r.split(" ");
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
