'use strict'
import React from 'react';
import App from './App';
import InputBox from './inputbox';
import { Pager, Pagination, PageItem} from 'react-bootstrap';

class Page extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentPage : 1
    }
  }
  backClickHandler(){
    if(this.state.currentPage>1)
    {
      this.setState({
        currentPage : this.state.currentPage-1
      },function(){
        this.props.getUsersOnPage(this.props.currentSearch,this.state.currentPage);
      });

    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      currentPage :nextProps.page
    });
  }

  forwardClickHandler(){
    this.setState({
        currentPage : this.state.currentPage+1
      },function(){
          this.props.getUsersOnPage(this.props.currentSearch,this.state.currentPage);
    });
  }
  render(){
    if(this.props.isFetched==false)
      return (
        <div></div>
    );
    return (
      <Pager>
        <PageItem onClick={this.backClickHandler.bind(this)}>&lt;</PageItem>
          {this.state.currentPage}
        <PageItem onClick={this.forwardClickHandler.bind(this)}>&gt;</PageItem>
      </Pager>
    );
  }
}
export default Page;