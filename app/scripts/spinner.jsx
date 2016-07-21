'use strict'
import React from 'react';

class Spinner extends React.Component {

  render() {
    if(this.props.isFetching==true && this.props.isFetched==false){
      return (
        <div className = 'row'>
          <div className = 'col-xs-12'>
            <div className = "cssload-container">
              <div className = "cssload-whirlpool"></div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div></div>
    );
  }
}

export default Spinner;