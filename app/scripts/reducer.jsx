'use strict'
import * as searchActionConstants from './constants';
// FETCH_REQUEST,
//   FETCH_RESPONSE_SUCCESS,
//   FETCH_RESPONSE_FAILURE,
//   CHANGE_PAGE
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
      object.currentResultSet.isFetching=true;
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