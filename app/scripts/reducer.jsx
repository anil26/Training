'use strict'
import * as TypeRacerActionCreator from './constants';
import { parseInput } from './helper';

 var initialState = {
  randomText:'',
  isWrongWord : false,
  currentWord : {
    index : 0,
  },
  statusText:''
}

const TypeRacerReducer = (state=initialState,action) => {
  switch(action.type){
    case TypeRacerActionCreator.SET_RIGHT_STATE :
      var object=Object.assign({},state);
      object.currentWord={
        index : action.payload.index
      }
      object.isWrongWord=false;
      object.textFieldDisabled=false;
      return object;
      break;
    case TypeRacerActionCreator.SET_WRONG_STATE :
      var object=Object.assign({},state);
      object.currentWord={
        index : action.payload.index
      }
      object.isWrongWord=true;
      object.textFieldDisabled=false;
      return object;
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
        isWrongWord : false,
        currentWord : {
          index : 0,
        },
        statusText:'',
        textFieldDisabled : true
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