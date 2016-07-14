'use strict';

import React from 'react';
import { render } from 'react-dom';
import * as currentDay from './datehelper';
import Calender from './calendercomponent'
import Root from './Root';
import Home from './Home';
import CalenderReducer from './calenderreducer';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
/**
 * Core Javascript file for the application which renders root component
 * inside the HTMLElement with 'appContainer' Id.
 */

window.__INITIAL_STATE__ = {
  calenderState:{
    datePicked : currentDay.currentDate,
    monthPicked : currentDay.currentMonth,
    yearPicked : currentDay.currentYear
  }
};

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = compose(middlewareEnhancer,window.devToolsExtension ? window.devToolsExtension() : f => f );
const store = createStore(CalenderReducer, window.__INITIAL_STATE__, enhancers);


console.log(store.getState());
render(<Home store={store} />, document.querySelector('#appContainer'));
