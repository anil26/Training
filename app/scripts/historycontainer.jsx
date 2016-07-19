'use strict'
import React from 'react';
import Request from './request';
import HistoryPresentational from './historypresentational';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postmanActionCreator from './actions';


class HistoryContainer extends React.Component{
  render(){
    return (
      <HistoryPresentational request={this.props.actions.makeRequest.bind(this)} requestHistory={this.props.requestHistory}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  currentRequest : state.currentRequest,
  requestHistory : state.requestHistory,
  statusText : state.statusText
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(postmanActionCreator, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(HistoryContainer);