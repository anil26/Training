'use strict'
import React from 'react';
/*<div>
  <ul>
    <li><img src="https://avatars.githubusercontent.com/u/38420?v=3" alt="User Avatar" height="70" width="70"/></li>
    UserName:<li>Anil</li>
    URL:<li><a target="_blank" href="https://github.com/anil">Link</a></li>
  </ul>
</div>*/

class Result extends React.Component{
  createHTMLForResult(list){
    // var list=this.props.data;
    debugger;
    return list.map(function(current,index,array){
      debugger;
      return (
        <div>
          <ul>
          <li><img src={current.avatar_url} alt="User Avatar" height="70" width="70"/></li>
          UserName:<li>{current.login}</li>
          URL:<li><a target="_blank" href={current.html_url}>Link</a></li>
          </ul>
        </div>
      );
    });
  }
  render(){
    debugger;
    return (
      <div>
        <h1>Searched Result</h1>
        {this.createHTMLForResult(this.props.data)}
      </div>
    );
  }
}
export default Result;
