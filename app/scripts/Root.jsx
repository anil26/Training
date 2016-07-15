'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import InputBoxes from './inputboxes';
import Calender from './calendercomponent';
import { Provider, connect } from 'react-redux';
import * as CalenderActions from './actions';
import { bindActionCreators } from 'redux';

class Root extends React.Component{

  constructor(props){
    super(props);
    this.state={
      dayObject : this.props.dayObject
    };

  }
  changeState(dayObject){
    this.setState({
      dayObject : dayObject
     });
  }
  render(){
    return (
      <div>
      <InputBoxes go={this.props.actions.setNewDay.bind(this)} changeState={this.changeState.bind(this)}/>
      <Calender date={this.state.dayObject} />
      </div>
    );
  }
}


const mapStateToProps=(state)=>({
  dayObject : state.Date
});

const mapDispatchToProps=(dispatch)=>({
  actions : bindActionCreators(CalenderActions,dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(Root);
