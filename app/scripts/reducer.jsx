'use strict';
import * as authActionCreators from './constants';

const initialstate={
  isAuthenticated : false,
  isAuthenticating : false,
  statusText : null,
  currentUser : {}
};


const authReducer=(state=initialstate,action)=>{
  switch(action.type){
    case authActionCreators.LOGIN_USER_SUCCESS:
    return Object.assign({},state,{
      isAuthenticated: true,
      statusText:"Logged in Successfully",
      isAuthenticating :false,
      currentUser : action.currentUser
    });
    case authActionCreators.LOGIN_USER_FAILURE:
    return Object.assign({},state,{
      isAuthenticated : false,
      statusText : "Failed to Login",
      isAuthenticating : false
    });
    case authActionCreators.LOGIN_USER_REQUEST:
    return Object.assign({},state,{
      isAuthenticated : false,
      isAuthenticating :true,
      statusText : "Authentication is going on"
    });
    default :
    return state;
  }
};

export default authReducer;