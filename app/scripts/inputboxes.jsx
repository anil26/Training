'use strict'
import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CalenderActions from './actions';
import ReactDOM from 'react-dom';
import * as Validators from './helper';
class InputBoxes extends React.Component{
  setDate(){
    debugger;
    var date=parseInt(ReactDOM.findDOMNode(this.refs.date).value);
    var month=parseInt(ReactDOM.findDOMNode(this.refs.month).value);
    var year=parseInt(ReactDOM.findDOMNode(this.refs.year).value);
    console.log(date,month,year);
    debugger;
    var isDateValid=Validators.dateValidator(date);
    var isMonthValid=Validators.monthValidator(month);
    var isYearValid=Validators.yearValidator(year);
    if(isDateValid && isMonthValid && isYearValid){
      this.props.actions.setNewDay({date : date,month : month,year :year});
    }

  }
  render(){
    return (
      <div>
      <div className="inputinline">
      <div className="padinputs">
      Date:<input ref='date'/>
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

const mapStateToProps=(state)=>({
  dayObject : state.calenderState
});
const mapDispatchToProps=(dispatch)=>({
actions : bindActionCreators(CalenderActions,dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(InputBoxes);