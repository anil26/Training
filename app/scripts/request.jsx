'use strict'
import React from 'react';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { makeRequest } from './actions';
class Request extends React.Component{
  sendFromHistory(){
    this.props.request(this.props.url,this.props.method);
  }
  render(){
    return(
        <div className='row'>
            <ListGroupItem header={this.props.date} onClick={this.sendFromHistory.bind(this)}>
              {this.props.method}  {this.props.url}
            </ListGroupItem>
        </div>

    );
  }
}
export default Request;