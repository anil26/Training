'use strict';
import React from 'react';
import SearchBar from 'react-search-bar';
import fetch from 'isomorphic-fetch';
import ReactDOM from 'react-dom';


var t=["anil","sunil","sudhir","rinku","priyanka","kamesh"];
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
    var t1=t.filter(function(current,index,array){
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
      that.searchFromApi(value);
      that.state.timerid=null;
      },2000);

    this.setState({
      timerid : t1
    });
  }
  searchFromApi(){
    console.log("called searchApi");
  }
  onChange(){
    var value=ReactDOM.findDOMNode(this.refs.inputbox).value;
    debugger;
    if(this.state.timerid!==null){
      clearTimeout(this.state.timerid);
      this.callBack(value);
      console.log("getting called");
    }
    else{
      this.callBack(value);
    }


    var suggestion=this.searchLocally(value);
    var suggestionAnchor=ReactDOM.findDOMNode(this.refs.suggestionbox);

    debugger;
    var htmlForSuggestion="";
    suggestion.forEach(function(current,index,array){
      htmlForSuggestion+="<ul>"+current +"</ul>";
    });
    suggestionAnchor.innerHTML=htmlForSuggestion;

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