'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import InputBoxes from './inputboxes';
import Calender from './calendercomponent';
import { Provider } from 'react-redux';
import Root from './Root';
class Home extends React.Component{
  render(){
    return (
      <Provider store={this.props.store}>
        <Root  store={this.props.store}/>
      </Provider>
    );
  }
}
export default Home;