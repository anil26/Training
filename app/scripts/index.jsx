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


window.__INITIAL_STATE__ = {
  Date:{
    day: currentDay.currentDate,
    month : currentDay.currentMonth,
    year : currentDay.currentYear
  }
};

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = compose(middlewareEnhancer,window.devToolsExtension ? window.devToolsExtension() : f => f );
const store = createStore(CalenderReducer, window.__INITIAL_STATE__, enhancers);


render(<Home store={store} />, document.querySelector('#appContainer'));
