'use strict'
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import * as helpers from './helper';


class TypeField extends React.Component {
  onKeyUp(event) {
    var textArray = this.props.randomText;
    var currentIndex = this.props.currentWord.index;
    var isWrongWord = this.props.isWrongWord;
    var typedText = ReactDOM.findDOMNode(this.refs.typebox);
    if(typedText.value == ""){
      this.props.setRightState(currentIndex);
      return;
    }
    var currentText = textArray[currentIndex].replace(/[\n\r]+/g,'');
    if(String.fromCharCode(event.which) == " " && typedText.value.length == currentText.length+1){
      if(helpers.checkToRemove(textArray[currentIndex],typedText.value)){
        typedText.value = "";
        this.props.setRightState(currentIndex+1);
      }
      else {
        this.props.setWrongState(currentIndex);
      }
    }
    else{
      if(!helpers.checkValidity(textArray[currentIndex],typedText.value)){
        this.props.setWrongState(currentIndex);
      }
      else {
        this.props.setRightState(currentIndex);
      }
    }
  }
  render(){
    var classForTypeField;
    if(this.props.isWrongWord){
      classForTypeField = "txtInput wrongTypeField";
    }
    else{
      classForTypeField = 'txtInput';
    }
    return (
        <div>
          <input disabled={this.props.disabled} placeholder="Type the above text here"className={classForTypeField} ref="typebox" type="text"  autocorrect="off" autocapitalize="off" onKeyUp={this.onKeyUp.bind(this)}/>
        </div>
    );
  }
}
export default TypeField;