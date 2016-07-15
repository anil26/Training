'use strict'
import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';
import * as Validators from './helper';

class InputBoxes extends React.Component{
  setDate(){
    var day=parseInt(ReactDOM.findDOMNode(this.refs.day).value);
    var month=parseInt(ReactDOM.findDOMNode(this.refs.month).value);
    var year=parseInt(ReactDOM.findDOMNode(this.refs.year).value);
    var isDateValid=Validators.dateValidator(day);
    var isMonthValid=Validators.monthValidator(month);
    var isYearValid=Validators.yearValidator(year);
    if(isDateValid && isMonthValid && isYearValid){
      this.props.go({day : day,month : month,year :year});
      this.props.changeState({day : day,month : month,year :year});
    }

  }
  render(){
    return (
      <div>
      <div className="inputinline">
      <div className="padinputs">
      Date:<input ref='day'/>
      </div>
      <div className="padinputs">
      Month:<input ref='month'/>
      </div>
      <div className="padinputs">
      Year:<input ref='year'/>
      </div>
      <div>
      <Button bsStyle="primary" ref="go" className="positionbutton" onClick={this.setDate.bind(this)}>Go</Button>
      </div>
      </div>
      </div>

    );
  }
}

export default InputBoxes;