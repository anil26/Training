'use strict'

import * as currentDay from './datehelper';
import SET_NEW_DAY from './constants';

var initialstate={
  Date:{
    date : currentDay.currentDate,
    month : currentDay.currentMonth,
    year : currentDay.currentYear
  }
}
function CalenderReducer(state=initialstate,action){
  switch(action.type){
    case SET_NEW_DAY:
    var newState=Object.assign({},state);
    newState.Date.day=action.dayObject.day;
    newState.Date.month=action.dayObject.month;
    newState.Date.year=action.dayObject.year;
    return newState;
    default :
    return state;
  }
}

export default CalenderReducer;
