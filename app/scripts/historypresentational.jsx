'use strict'
import React from 'react';
import Request from './request';
import { ListGroup } from 'react-bootstrap';
import { getFormattedDate } from './helper';
class HistoryPresentational extends React.Component{
  createRequestHtml(list){
    var that=this;
    return list.map(function(current,index,array){
      var date=getFormattedDate(current.date);
      return (<Request  date={date} request={that.props.request} url={current.url} method={current.method}></Request>)
    });
  }
  render(){
    return (
      <div className='row'>
        <div className='col-md-12'>
          <ListGroup>
          {this.createRequestHtml(this.props.requestHistory || [])}
          </ListGroup>
        </div>
      </div>

    );
  }
}
export default HistoryPresentational;