'use strict'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
class Root extends React.Component{
  render(){
    return (
      <div className='container'>
        <div className="page-header">
          <h1>My Postman</h1>
        </div>
      <Provider store={ this.props.store }>
      <App/>
      </Provider>
      </div>
    );
  }
}

export default Root;