'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'formsy-react';

import MyInput from './input';
// var base=Rebase.createClass('https://userlogin-77ecd.firebaseio.com');
const UserLogin = React.createClass({
  getInitialState() {
    return { canSubmit: false };
  },
  submit(data) {
    alert(JSON.stringify(data, null, 4));
  },
  enableButton() {
    this.setState({ canSubmit: true });
  },
  disableButton() {
    this.setState({ canSubmit: false });
  },
  render() {
    return (
      <div>
      <h1 className='center'>Login to Mock Website</h1>
      <Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="center">
        <MyInput value="" name="email" title="EmailId:" validations="isEmail" validationError="This is not a valid email" required />
        <MyInput value="" name="password" title="Password:" type="password" required />
        <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
      </Form>
      </div>
    );
  }
});

export default UserLogin;
