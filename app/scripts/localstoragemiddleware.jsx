'use strict'
import { FETCH_REQUEST } from './constants';

const localStorageMiddleware = state => next => action =>{
  switch(action.type){
    case FETCH_REQUEST :
      if(localStorage.getItem("pastSearch")===null){
        var array=[];
        array.push(action.payload.name);
        localStorage.setItem("pastSearch",JSON.stringify(array));

      }
      else {
        var stringified=localStorage.getItem("pastSearch");
        var parsedJSON=JSON.parse(stringified);
        if(action.payload.name!=="" && action.payload.name!==null){
          parsedJSON.push(action.payload.name);
          localStorage.setItem("pastSearch",JSON.stringify(parsedJSON));
        }
      }
      break;
    default :
      break;
  }
  next(action);
}

export default localStorageMiddleware;