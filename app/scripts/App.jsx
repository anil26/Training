'use strict'
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Board from './Board';
import TypeField from './TypeField';
import * as TypeRacerActionCreators from './action';
import { Button } from 'react-bootstrap';
import Timer from './Timer';
import ReactDOM from 'react-dom';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      disabled : this.props.textFieldDisabled,
      minutes : '',
      seconds :''
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
    var buttonElement=ReactDOM.findDOMNode(this.refs.startbutton);

    buttonElement.disabled=true;
    var minutes,seconds;
    var timerTime=timelimit;
    minutes=timerTime;
    seconds=0;
    var that=this;
    var timerid=setInterval(function(){
      seconds=parseInt(seconds);
      if(seconds!==0){
        seconds=parseInt(seconds);
        seconds=seconds-1;

        if(seconds<10 && seconds!==-1){
          seconds=seconds.toString();
          seconds="0" + seconds;
        }
      }
      else{
        seconds=59;
        minutes=minutes-1;
      }
      that.setState({
            seconds : seconds,
            minutes : minutes
      });
      time++;
      if(time/60==timelimit && that.props.currentWord.index!==that.props.randomText.length){
        that.props.actions.getRandomText();
        clearInterval(timerid);
        buttonElement.disabled=false;
        alert("You lost");
        that.setState({
        minutes : '',
        seconds : ''
      })

      }else if(time/60<timelimit && that.props.currentWord.index==that.props.randomText.length){
        var speed=that.props.randomText.length/(time/60);
        alert("You won!!" + " Wow Your typing speed was " + speed + "words/minute");
        clearInterval(timerid);
        that.props.actions.getRandomText();
        buttonElement.disabled=false;
        that.setState({
        minutes : '',
        seconds : ''
      })
      }


    },1000);
  }
  render(){
    debugger;
    return (
        <div>
          {!this.state.disabled ?(<Timer minutes={this.state.minutes} seconds={this.state.seconds}/>) : (<div></div>) }
          <Board randomText={this.props.randomText} currentWord={this.props.currentWord} isWrongWord={this.props.isWrongWord}/>
          <TypeField disabled={this.state.disabled} randomText={this.props.randomText} currentWord={this.props.currentWord} isWrongWord={this.props.isWrongWord} setRightState={this.props.actions.setRightState.bind(this)} setWrongState={this.props.actions.setWrongState.bind(this)}/>
          <Button ref="startbutton" onClick={this.onClick.bind(this)} className="startbutton" bsStyle="primary" bsSize="large">Start</Button>
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



