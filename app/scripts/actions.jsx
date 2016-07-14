'use strict'
import SET_NEW_DAY from './constants';

const setNewDay=(dayObject)=>{
  return {
    type : SET_NEW_DAY,
    day : dayObject
  }
};

export {
  setNewDay
}