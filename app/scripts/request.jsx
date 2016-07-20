'use strict'
import React from 'react';
import { ListGroup, ListGroupItem,Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { makeRequest } from './actions';
class Request extends React.Component{
  sendFromHistory(){
    this.props.request(this.props.url,this.props.method);
  }

  removeFromHistory(event){
    var stringified=localStorage.getItem("requestHistory");
    debugger;
    var parsedJSON=JSON.parse(stringified);
    var that=this;
    var index=parsedJSON.findIndex(function(current,index,array){
      if(current.date==that.props.nonformatteddate){
        return true;
      }
    });
    debugger;
    var requestItem=ReactDOM.findDOMNode(this.refs.listgroup);
    requestItem.remove();
    event.stopPropagation();

    debugger;

  }
  render(){
    return(
        <div className='row'>
            <ListGroupItem ref="listgroup" header={this.props.date} onClick={this.sendFromHistory.bind(this)}>
              {this.props.method}  {this.props.url} <Button ref="cancelbutton" className='cancel' onClick={this.removeFromHistory.bind(this)}>x</Button>
            </ListGroupItem>
        </div>

    );
  }
}
export default Request;