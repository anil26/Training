'use strict'
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
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