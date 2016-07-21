'use strict'
import React from 'react';
class Test extends React.Component{
  // createHTMLForResult(){

  // }
  // <a target="_blank" href="http://your_url_here.html">Link</a>
  render(){
    return (
      <div>
        <ul>
          <li><img src="https://avatars.githubusercontent.com/u/38420?v=3" alt="User Avatar" height="70" width="70"/></li>
          UserName:<li>Anil</li>
          URL:<li><a target="_blank" href="https://github.com/anil">Link</a></li>
        </ul>
      </div>
    );
  }
}
export default Test;
