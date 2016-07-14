'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import InputBoxes from './inputboxes';
import Calender from './calendercomponent';
import { Provider } from 'react-redux';
class Root extends React.Component{
  render(){
    return (
      <div>
      <InputBoxes/>
      <Calender calenderState={this.props.store.getState()}/>
      </div>
    );
  }
}
export default Root;