'use strict'
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Board extends React.Component{
  createBoardHtml(){
    var that=this;
    return this.props.randomText.map(function(current,index,array){
      if(that.props.currentWord.index==index){
        if(that.props.isWrongWord==true){
          return (<span key={index}><span className="wrongText">{current}</span><span> </span></span>);
        }
        if(that.props.isWrongWord==false){
          return (<span key={index}><span className="correctText">{current}</span><span> </span></span>);
        }
      }
      return (<span key={index}><span>{current}</span><span> </span></span>);
    });
  }
  render(){
    var createBoardHtml=this.createBoardHtml.bind(this)
    return (
        <div className="board">
          <p>
          {createBoardHtml()}
          </p>
        </div>
    );
  }
}
export default Board;