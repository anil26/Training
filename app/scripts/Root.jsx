'use strict'
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import Test from './test';
class Root extends React.Component{
  render(){
    return (
     <Provider store={this.props.store}>
      <App/>
     </Provider>
    );
  }
}
export default Root;