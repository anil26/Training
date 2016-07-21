'use strict'
import React from 'react';
import Spinner from './spinner';
import { FormGroup,FormControl} from 'react-bootstrap';
class SearchBox extends React.Component{
  render(){
    return (
      <FormGroup>
        <InputGroup>
          <FormControl type="text" />
          <Spinner/>
        </InputGroup>
      </FormGroup>
    );
  }
}

export default App;


