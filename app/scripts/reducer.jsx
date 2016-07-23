'use strict'
import * as TypeRacerActionCreator from './constants';
import { parseInput } from './helper';
 // t3,
 //  SET_RIGHT_STATE,
 //  SET_WRONG_STATE,
 //  FETCH_FAILURE,
 //  FETCH_REQUEST,
 //  FETCH_SUCCESS
var initialState={
  randomText:'',
  wordPosition : 0,
  isWrongWord : false,
  currentWord : {
    index : 0,
  },
  statusText:''
}


const TypeRacerReducer=(state=initialState,action)=>{
  switch(action.type){
    case TypeRacerActionCreator.SET_RIGHT_STATE :
      var object=Object.assign({},state);
      object.currentWord={
        index : action.payload.index
      }
      return object;
      break;
    case TypeRacerActionCreator.SET_WRONG_STATE :
      var object=Object.assign({},state);
      object.currentWord={
        index : action.payload.index
      }
      break;
    case TypeRacerActionCreator.FETCH_REQUEST :
      var object=Object.assign({},state);
      object.statusText="Requesting for fetch";
      return object;
      break;
    case TypeRacerActionCreator.FETCH_SUCCESS :
      var text=parseInput(action.payload.data);
      var textArray=text.split(" ");
      var object={
        randomText:textArray,
        wordPosition : 0,
        isWrongWord : false,
        currentWord : {
          index : 0,
        },
        statusText:''
      }

      return object;
    case TypeRacerActionCreator.FETCH_FAILURE :
      var object=Object.assign({},state);
      object.statusText="Fetch Failed";
      return object;
    default :
      return state;

  }
}


export default TypeRacerReducer;