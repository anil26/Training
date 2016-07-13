'use strict';

import React from 'react';
import { render } from 'react-dom';
import App from '/components/app';
import SignUpPage from '/components/signuppage';
import Userlogin from '/components/userlogin';
import Home from '/components/Home';
import ProfilePage from '/components/profilepage';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


class Routes extends React.Component{
  render(){
    return (
    <Router history={browserHistory}>
    <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path="/signup" component={SignUpPage}/>
    <Route path="/login" component={Userlogin}/>
    <Route path="/profile" component={ProfilePage}/>
    </Route>
    </Router>
    );
  }
}

export default Routes;