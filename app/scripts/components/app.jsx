'use strict'
import React from 'react';
import { Nav , NavItem, Navbar} from 'react-bootstrap';
import UserLogin from './userlogin';
import { Link } from 'react-router';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  handleSelect(selectedkey){
    console.log(selectedkey);
  }
  render(){
    return (
      <div>
      <h1>Mock Website</h1>
      <Navbar>
      <Navbar.Toggle/>
      <Navbar.Collapse>
      <Nav bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
      <NavItem eventKey={1}  data-toggle="tab"><Link to="/" activeStyle={{color : 'red'}}>Home</Link> </NavItem>
      <NavItem eventKey={2}  data-toggle="tab"><Link to="/login" activeStyle={{color : 'red'}}>Login</Link> </NavItem>
      <NavItem eventKey={3}  data-toggle="tab"><Link to="/signup" activeStyle={{color : 'red'}}>SignUp</Link></NavItem>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
      {this.props.children}
      </div>
    );
  }
}


export default App;