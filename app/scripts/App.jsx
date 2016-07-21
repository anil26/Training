'use strict'
import React from 'react';
import Spinner from './spinner';
import InputBox from './inputbox';
import Paginat from './pagination';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchActionCreators from './actions';
import Result from './result';
class App extends React.Component{
  render(){
    debugger;
    return (
        <div>
          <div className='row'>
          <div className='col-xs-12 col-md-12 col-lg-12 '>
          <InputBox pastSearch={this.props.pastSearch} getUsers={this.props.actions.getUserRequest}/>
          </div>
          </div>
          <Spinner isFetching={this.props.result.isFetching}/>
          <Result data={this.props.result.currentResult.items?this.props.result.currentResult.items : []}/>
          <Paginat/>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  result : state.currentResultSet,
  pastSearch : state.pastSearch,
  currentPage : state.currentPage
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(searchActionCreators, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
