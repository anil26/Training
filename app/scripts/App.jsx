'use strict'
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Board from './Board';
import TypeField from './TypeField';
import * as TypeRacerActionCreators from './action';
import { Button } from 'react-bootstrap';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      disabled : this.props.textFieldDisabled
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      disabled : nextProps.textFieldDisabled
    });
  }
  onClick(){
    this.setState({
      disabled : false
    });
    var timelimit=3;
    var time=0;
    var that=this;
    var timerid=setInterval(function(){
      time++;
      if(time/60==timelimit && that.props.currentWord.index!==that.props.randomText.length){
        that.props.actions.getRandomText();
        clearInterval(timerid);
        alert("You lost");
      }else if(time/60<timelimit && that.props.currentWord.index==that.props.randomText.length){
        var speed=that.props.randomText.length/(time/60);
        alert("You won!!" + " Your typing speed was " + speed + "words/minute");
        clearInterval(timerid);
        that.props.actions.getRandomText();
      }

    },1000);
  }
  render(){
    return (
        <div>
          <Board randomText={this.props.randomText} currentWord={this.props.currentWord} isWrongWord={this.props.isWrongWord}/>
          <TypeField disabled={this.state.disabled} randomText={this.props.randomText} currentWord={this.props.currentWord} isWrongWord={this.props.isWrongWord} setRightState={this.props.actions.setRightState.bind(this)} setWrongState={this.props.actions.setWrongState.bind(this)}/>
          <Button onClick={this.onClick.bind(this)} className="startbutton" bsStyle="primary" bsSize="large">Start</Button>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  randomText : state.randomText,
  currentWord : state.currentWord,
  isWrongWord : state.isWrongWord,
  textFieldDisabled : state.textFieldDisabled
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(TypeRacerActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);



