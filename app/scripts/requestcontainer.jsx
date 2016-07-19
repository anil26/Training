'use strict'
import React from 'react';
import { DropdownButton,Dropdown,MenuItem,FormControl,ControlLabel,FormGroup } from 'react-bootstrap';
import RequestPresentational from './requestpresentational';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postManActionCreators from './actions';

class RequestContainer extends React.Component{
  render(){
    return (
      <RequestPresentational currentRequest={this.props.currentRequest } request={this.props.actions.makeRequest.bind(this)}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  currentRequest : state.currentRequest,
  requestHistory : state.requestHistory,
  statusText : state.statusText
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(postManActionCreators, dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(RequestContainer);



