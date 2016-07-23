'use strict'
import React from 'react';
import Spinner from './spinner';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { t3 } from './constants';



class TypeField extends React.Component{
  onChange(event){
   debugger;
   console.log("typed");
  }
  render(){
    return (
        <div>
          <input ref="typebox" onChange={this.onChange.bind(this)} type="text" className="txtInput" autocorrect="off" autocapitalize="off"/>
        </div>
    );
  }
}
export default TypeField;