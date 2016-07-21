'use strict'
import React from 'react';
import App from './App';
import InputBox from './inputbox';
import { Pagination } from 'react-bootstrap';
const PaginationAdvanced = React.createClass({
  getInitialState() {
    return {
      activePage: 1
    };
  },

  handleSelect(eventKey) {
    debugger;
    this.setState({
      activePage: eventKey
    });
    // var keyword=this.props.currentSearch?this.props.currentSearch:"";
    this.props.getUsersOnPage(this.props.currentSearch,eventKey);
  },

  render() {
    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={100}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.handleSelect} />
    );
  }
});
export default PaginationAdvanced;