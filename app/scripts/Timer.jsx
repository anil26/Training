'use strict'
import React from 'react';
class Timer extends React.Component{
  render(){
    return (
      <div className="timer">{this.props.minutes}:{this.props.seconds}</div>
    );
  }
}
export default Timer;
