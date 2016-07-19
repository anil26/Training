'use strict'
import React from 'react';
import RequestContainer from './requestcontainer';
import HistoryContainer from './historycontainer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeRequest } from './actions';
import * as postmanActionCreator from './actions';

class App extends React.Component{
  render(){
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 history col-sm-12'>
            <h2><b>History</b></h2>
            <div>
              <HistoryContainer/>
            </div>
          </div>
          <div className="clearfix visible-sm-block">
          </div>
          <div className='col-md-8 col-sm-12 requestbody'>
            <h2><b>Request Body</b></h2>
            <div>
              <RequestContainer request={this.props.actions.makeRequest.bind(this)}/>
            </div>
          </div>
          <div className='clearfix visible-md-block'>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
  currentRequest : state.currentRequest,
  requestHistory : state.requestHistory,
  statusText : state.statusText
  };
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(postmanActionCreator, dispatch)
});



export default connect(mapStateToProps,mapDispatchToProps)(App);