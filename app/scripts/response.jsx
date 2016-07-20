'use strict'

import React from 'react';

class Response extends React.Component{
  render(){
    return (
      <div className='row'>
          <div className='col-md-12  responsebox'>
            <h2 className="offset"><strong>Response Body</strong></h2>
            {this.props.currentRequest?this.props.currentRequest.data : this.props.statusText}
          </div>
        </div>
    );
  }
}

export default Response;

