'use strict'
import React from 'react';
import Spinner from './spinner';
import InputBox from './inputbox';
import Paginat from './pagination';
class App extends React.Component{
  render(){
    return (
        <div>
        <div className='row'>
        <div className='col-xs-12 col-md-12 col-lg-12 '>
        <InputBox/>
        </div>
        </div>
        <Spinner/>
        <div className='row'>
        <div className='col-md-12'>
          <h2>Result Body</h2>
        </div>
        </div>
        <Paginat/>
        </div>



    );
  }
}

export default App;