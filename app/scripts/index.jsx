'use strict';

import React from 'react';
import { render } from 'react-dom';
import App from '/components/app';
import SignUpPage from '/components/signuppage';
import Userlogin from '/components/userlogin';
import Home from '/components/Home';
import Test from '/components/test';
import Rebase from 're-base';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
/**
 * Core Javascript file for the application which renders root component
 * inside the HTMLElement with 'appContainer' Id.
 */


// var config = {
//     apiKey: "AIzaSyCYBxTnmqyk15wnXhdRt1Yl0STZzH_I1ik",
//     authDomain: "userlogin-77ecd.firebaseapp.com",
//     databaseURL: "https://userlogin-77ecd.firebaseio.com",
//     storageBucket: "userlogin-77ecd.appspot.com",
// };



// const store = configureStore(window.__INITIAL_STATE__);

// let token = localStorage.getItem('token');

// if (token !== null) {
//   store.dispatch(authActionCreators.loginUserSuccess(token));
// }
render((
  <Router history={browserHistory}>

  <Route path='/' component={App}>
  <IndexRoute component={Home}/>
  <Route path="/signup" component={SignUpPage}/>
  <Route path="/login" component={Userlogin}/>
  </Route>

  </Router>
  ),document.querySelector('#appContainer'));

// render(<Root/>, document.querySelector('#appContainer'));
