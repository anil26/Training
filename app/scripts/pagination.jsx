'use strict'
import React from 'react';
import App from './App';
import InputBox from './inputbox';
import { Pagination } from 'react-bootstrap';

class PaginationAdvanced extends React.Component{
  constructor(props){
    super(props);
    this.state={
      activePage :1
    }
  }
  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
    this.props.getUsersOnPage(this.props.currentSearch,eventKey);
  }
  render() {
    if(this.props.isFetched==false)
      return (
        <div></div>
      );
    return (
      <Pagination
        prev
        first
        last
        ellipsis
        boundaryLinks
        items={100}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.handleSelect.bind(this)} />
    );
  }
}
export default PaginationAdvanced;