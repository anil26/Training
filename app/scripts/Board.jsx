'use strict'
import React from 'react';
import Spinner from './spinner';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { t3 } from './constants';
class Board extends React.Component{
  createBoardHtml(){
    return this.props.randomText.map(function(current,index,array){
      if(this.props.currentWord.index==index){
        if(this.props.isWrongWord==true){
          return (<span className={wrongText}>current</span>);
        }
        if(this.props.isWrongWord==false){
          return (<span className={correctText}>current</span>);
        }
      }
      return (<span>current</span>);

    });
  }

  render(){
    return (
        <div className="board">
          {t3}
        </div>
    );
  }
}
export default Board;