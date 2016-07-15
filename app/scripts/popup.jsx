'use strict'
import React from 'react';
class PopUp extends React.Component{

  constructor(props){
    super(props);
    this.state={
      message : ''
    }
  }


  render(){
    return (
      <div ref="toast">
      Anil chaudhary
      </div>
    );
  }
}

const showNotification=function(message){
 var timer='';
}