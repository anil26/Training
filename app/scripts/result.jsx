'use strict'
import React from 'react';
import { NO_USER_ON_THIS_PAGE } from './constants';

class Result extends React.Component{
  createHTMLForResult(list){
    return list.map(function(current,index,array){
      return (
        <div>
          <ul>
            <li>
              <img src={current.avatar_url} alt="User Avatar" height="70" width="70"/>
            </li>
          UserName:<li>
                    {current.login}
                   </li>
          URL:<li>
                <a target="_blank" href={current.html_url}>
                  Link
                </a>
              </li>
          </ul>
          <hr></hr>
        </div>
      );
    });
  }
  render(){
    if(this.props.statusText=='NO_USER_ON_THIS_PAGE'){
      return (
        <div>
          <h2>{NO_USER_ON_THIS_PAGE}</h2>
        </div>
      );
    }
    return (
      <div>
        <h1>Searched Result</h1>
        {this.createHTMLForResult(this.props.data)}
      </div>
    );
  }
}
export default Result;
