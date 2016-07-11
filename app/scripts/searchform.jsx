'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl, ControlLabel,Button} from 'react-bootstrap';


class SearchForm extends React.Component{
  constructor(props){
    super(props);
  }

  requestData(event){
    event.preventDefault();
    var city=ReactDOM.findDOMNode(this.refs.city).value;//
   this.props.store.getState().currentCityWeather={};
    this.props.getWeather(this.props.store,city);
  }

  render(){
    return (
      <form  className='centerform' onSubmit={this.requestData.bind(this)}>
    <FormGroup  controlId="formControlsName" bsSize="large">
      <ControlLabel>City Name</ControlLabel>
      <FormControl  ref ="city" type="text"  placeholder="Enter City Name"/>
    </FormGroup>
    <Button type="submit">Submit</Button>
    </form>
    );
  }
}

export default SearchForm;