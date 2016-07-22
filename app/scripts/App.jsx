'use strict'
import React from 'react';
import Spinner from './spinner';
import InputBox from './inputbox';
import Page from './pagination';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchActionCreators from './actions';
import Result from './result';
class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      isFetching : this.props.result.isFetching,
      isFetched : this.props.result.isFetched
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      isFetched : nextProps.result.isFetched,
      isFetching : nextProps.result.isFetching
    });
  }
  changeState(){
    this.setState({
      isFetching : false,
      isFetched : false
    });
  }

  render(){
    debugger;
    return (
        <div>
          <div className='row'>
            <div className='col-xs-12 col-md-12 col-lg-12 '>
            <InputBox  changeState={this.changeState.bind(this)} isFetching={this.state.isFetching} isFetched={this.state.isFetched} pastSearch={this.props.pastSearch} getUsers={this.props.actions.getUserRequest} currentSearch={this.props.currentSearch}/>
            </div>
          </div>
          <Spinner isFetching={this.props.result.isFetching} isFetched={this.props.result.isFetched}/>
          <Result statusText={this.props.statusText} data={this.props.result.currentResult.items?this.props.result.currentResult.items : []}/>
          <Page isFetched={this.props.result.isFetched} page={this.props.result.page} getUsersOnPage={this.props.actions.getUserRequest} currentSearch={this.props.currentSearch}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  result : state.currentResultSet,
  pastSearch : state.pastSearch,
  currentSearch : state.currentSearch,
  statusText : state.statusText
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(searchActionCreators, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
