'use strict'
import MyInput from './input';
import React from 'react';
import { Form } from 'formsy-react';

const SignUpPage =React.createClass({
  getInitialState(){
    return {
      canSignUp : false
    };
  },
  signUp(data){
    alert(JSON.stringify(data, null, 4));
    if(this.isPasswordSame(data)){
      alert("successfull");
    }
    else{
      alert("failed");
    }
  },
  isPasswordSame(data){
    return (data.password===data.repassword);
  },
  enableSignUp(){
    this.setState({
      canSignUp :true
    });
  },
  disableSignUp(){
    this.setState({
      canSignUp : false
    });
  },
  render(){
    return (
    <div>
      <h1 className='center'>SignUp to Mock Website</h1>
      <Form onSubmit={this.signUp} onValid={this.enableSignUp} onInvalid={this.disableSignUp} className="center">
        <MyInput value="" name="Name" title="Name" type="text" required />
        <MyInput value="" name="email" title="EmailId:" validations="isEmail" validationError="This is not a valid email" required />
        <MyInput value="" name="password" title="Password:" type="password" required />
        <MyInput value="" name="repassword" title=" Re enter Password:" type="password" required />
        <button type="submit" disabled={!this.state.canSignUp}>Submit</button>
      </Form>
    </div>
    );
  }

});

export default SignUpPage;