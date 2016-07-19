'use strict'

import React from 'react';

class Response extends React.Component{
  render(){
    return (
      <div className='row'>
          <div className='col-md-12  responsebox'>
            <h3 className="offset"><strong>Response</strong></h3>
            {this.props.currentRequest?this.props.currentRequest.data : this.props.statusText}
          </div>
        </div>
    );
  }
}

export default Response;

