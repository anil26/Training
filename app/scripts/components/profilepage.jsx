'use strict'
import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import * as authActionCreators from '../actions';
class ProfilePage extends React.Component{
  componentWillMount(){
    if(this.shouldNotRender()){
      browserHistory.push("/profile");
    }
  }
  shouldNotRender(){
    return (this.props.isAuthenticated);
  }
  render(){
    return (
      <div>
      <h1>Profile Page for User</h1>
      </div>
    );
  }
}

const mapStateToProps=(state)=>({
  isAuthenticated : state.auth.isAuthenticated,
  currentUser : state.currentUser
});

const mapDispatchToProps=(dispatch)=>({
  actions:bindActionCreators(authActionCreators,dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage);