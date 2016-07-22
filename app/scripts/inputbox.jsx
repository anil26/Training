'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class InputBox extends React.Component{
  constructor(props){
    super(props);
    this.state={
      timerid : null,
      htmlForSuggestion:null,
      isFetching :false,
      isFetched : false
    }
  }
  searchLocally(keyword){
    if(keyword=="")
      return [];
    var filteredSuggestion=this.props.pastSearch.filter(function(current,index,array){
      if(current.indexOf(keyword)!==-1)
        return true;
      return false;
    });
    return filteredSuggestion;
  }
  onClickSuggestion(event){
    var inputBoxElement=ReactDOM.findDOMNode(this.refs.inputbox);
    var newText=event.target.innerHTML;
    inputBoxElement.value=newText;
    this.setState({
      htmlForSuggestion : null
    });
    this.props.getUsers(newText);
  }
  callBack(value){
    var that=this;
    var timerid=setTimeout(function(){
      var trimValue=value.trim();
      that.state.timerid=null;
      if(trimValue=="")
      return;
      that.props.getUsers(value);
      // that.state.timerid=null;
      },2000);
    this.setState({
      timerid : timerid
    });
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      isFetching : nextProps.isFetching,
      isFetched : nextProps.isFetched
    })
  }
  createHtmlForSuggestion(suggestion){
    var that=this;
    return suggestion.map(function(current,index,array){
      return (
        <div key={index} >
          <ul onClick={that.onClickSuggestion.bind(that)}>
            {current}
          </ul>
        </div>
      );
    });
  }

  onChange(){
    this.props.changeState();
    var value=ReactDOM.findDOMNode(this.refs.inputbox).value;
    var suggestion=this.searchLocally(value);
    var suggestionAnchor=ReactDOM.findDOMNode(this.refs.suggestionbox);
    var htmlForSuggestion=this.createHtmlForSuggestion(suggestion);
    this.setState({
      htmlForSuggestion : htmlForSuggestion
    })
    if(this.state.timerid!==null){
      clearTimeout(this.state.timerid);
    }
    this.callBack(value);
  }
  render(){
    return (
      <div>
        <input className='input' ref="inputbox" type="text"  name="search" placeholder="enter user name" onChange={this.onChange.bind(this)}/>
        <div ref="suggestionbox">
        {(this.state.isFetching ||  this.state.isFetched) ? '' : this.state.htmlForSuggestion}
        </div>
      </div>
    );
  }
}


export default InputBox;