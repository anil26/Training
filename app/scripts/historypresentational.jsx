'use strict'
import React from 'react';
import Request from './request';
import { ListGroup,Button } from 'react-bootstrap';
import { getFormattedDate } from './helper';

class HistoryPresentational extends React.Component{
  createRequestHtml(list){
    var that=this;
    return list.map(function(current,index,array){
      if(typeof(current.date)=="string"){
        var nonformatteddate=new Date(current.date);
        var date=getFormattedDate(nonformatteddate);
      }
      else{
        var nonformatteddate=current.date;
        var date=getFormattedDate(nonformatteddate);
      }
      return (<Request nonformatteddate={nonformatteddate} date={date} request={that.props.request} url={current.url} method={current.method}></Request>);
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