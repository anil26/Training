'use strict'
import { MAKE_REQUEST } from './constants';

const localStorageMiddleware = state => next => action =>{
  switch(action.type){
    case MAKE_REQUEST :
      if(localStorage.getItem("requestHistory")===null){
        var array=[];
        array.push[action];
        localStorage.setItem("requestHistory",JSON.stringify(array));

      }
      else {
        var stringified=localStorage.getItem("requestHistory");
        var parsedJSON=JSON.parse(stringified);
        parsedJSON.push(action);
        localStorage.setItem("requestHistory",JSON.stringify(parsedJSON));
      }
      break;
    default :
      break;
  }
  next(action);
}

export default localStorageMiddleware;