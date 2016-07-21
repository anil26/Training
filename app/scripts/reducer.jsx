'use strict'
import * as searchActionConstants from './constants';

var initialState={
  currentResultSet : {
    currentResult : [],
    isFetching : false,
    isFetched : false
  }
}

const searchReducer=(state=initialState,action)=>{
  switch(action.type){
    case searchActionConstants.FETCH_REQUEST :
      var object=Object.assign({},state);
      object.currentSearch=action.payload.name;
      object.currentResultSet={
        currentResult : [],
        isFetched : false,
        isFetching : true
      }
      return object;
    case searchActionConstants.FETCH_RESPONSE_SUCCESS:
      var object=Object.assign({},state);
      object.currentResultSet={
        currentResult : action.payload.data,
        isFetched : true,
        isFetching : false
      }
      return object;
    case searchActionConstants.FETCH_RESPONSE_FAILURE :
      var object=Object.assign({},state);
      object.currentResultSet.isFetching=false;
      object.currentResultSet.isFetched=false;
      return object;
    default :
      return state;
  }
}

export default searchReducer;