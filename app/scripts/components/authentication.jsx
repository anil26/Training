'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';



const requireAuthentication=(component)=>{
  class AuthenticatedComponent extends React.Component{
    componentWillMount(){
      this.checkAuthenticationStatus(this.props.isAuthenticated);
    }
    componentWillReceiveProps(nextProps){
      this.checkAuthenticationStatus(nextProps.isAuthenticated);
    }
    checkAuthenticationStatus(isAuthenticated){
      if (!isAuthenticated) {
        this.props.dispatch(routerActions.push('/login'));
    }
    render(){
      return (
        <div>
        {(this.props.isAuthenticated=== true) ? <Component{...this.props}/> : null}
        </div>
      );
    }
  }
}


export default requireAuthentication;

