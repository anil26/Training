'use strict';
import React from 'react';
import SearchBar from 'react-search-bar';
import fetch from 'isomorphic-fetch';
import ReactDOM from 'react-dom';


class InputBox extends React.Component{
  constructor(props){
    super(props);
    this.state={
      timerid : null
    }
  }
  searchLocally(keyword){
    if(keyword=="")
      return [];
    debugger;
    var t1=this.props.pastSearch.filter(function(current,index,array){
      if(current.indexOf(keyword)!==-1)
        return true;
      return false;
    });
    return t1;
  }
  callBack(value){
    debugger;
    var that=this;
    var t1=setTimeout(function(){
      console.log("reached");
      debugger;
      that.props.getUsers(value);
      that.state.timerid=null;
      },2000);
    this.setState({
      timerid : t1
    });
  }
  onChange(){
    var value=ReactDOM.findDOMNode(this.refs.inputbox).value;
    debugger;
    var suggestion=this.searchLocally(value);
    var suggestionAnchor=ReactDOM.findDOMNode(this.refs.suggestionbox);
    debugger;
    var htmlForSuggestion="";
    suggestion.forEach(function(current,index,array){
      htmlForSuggestion+="<ul>"+current +"</ul>";
    });
    suggestionAnchor.innerHTML=htmlForSuggestion;

    if(this.state.timerid!==null){
      clearTimeout(this.state.timerid);
      this.callBack(value);
      console.log("getting called");
    }
    else{
      this.callBack(value);
    }


  }
  render(){
    return (
      <div>
      <input className='input' ref="inputbox" type="text"  name="search" placeholder="enter user name" onChange={this.onChange.bind(this)}/>
      <div ref="suggestionbox"></div>
      </div>
    );
  }
}


export default InputBox;