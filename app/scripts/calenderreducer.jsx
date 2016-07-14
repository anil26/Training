'use strict'

import * as currentDay from './datehelper';
import SET_NEW_DAY from './constants';

var initialstate={
  calenderState:{
    datePicked : currentDay.currentDate,
    monthPicked : currentDay.currentMonth,
    yearPicked : currentDay.currentYear
  }
}
function CalenderReducer(state=initialstate,action){
  switch(action.type){
    case SET_NEW_DAY:
    var newState=Object.assign({},state,{});
    newState.calenderState.datePicked=action.day.date;
    newState.calenderState.monthPicked=action.day.month;
    newState.calenderState.yearPicked=action.day.year;
    return newState;
    default :
    return state;
  }
}

export default CalenderReducer;
