'use strict'
import React from 'react';
import { DropdownButton,Dropdown,MenuItem,FormControl,ControlLabel,FormGroup,Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class RequestPresentational extends React.Component{
  onSelect(eventKey,event){
    var newTitle=this.refs.dropdown.props.children[parseInt(eventKey)-1].props.children;
    this.refs.selected.innerHTML=newTitle;
  }
  send(){

    var url=ReactDOM.findDOMNode(this.refs.input).value;
    var method=this.refs.selected.innerHTML;
    this.props.request(url,method);
  }
  reset(){
    var inputElement=ReactDOM.findDOMNode(this.refs.input);
    inputElement.value=""
    this.refs.selected.innerHTML="";
  }
  render(){
    return (
      <div className='row'>
        <div className='col-md-12 requestbar'>
          <div className='row'>
            <div className='col-md-10'>
                <div className='row'>
                  <div className='col-md-2'>
                  <DropdownButton  ref="dropdown" onSelect={this.onSelect.bind(this)} bsStyle="default" id="mydropdown" title="Method">
                    <MenuItem eventKey="1" >GET</MenuItem>
                    <MenuItem eventKey="2">PUT</MenuItem>
                    <MenuItem eventKey="3">POST</MenuItem>
                    <MenuItem eventKey="4">DELETE</MenuItem>
                    <MenuItem eventKey="5">HEAD</MenuItem>
                    <MenuItem eventKey="6">PATCH</MenuItem>
                  </DropdownButton>
                  </div>
                  <div className='col-md-7'>
                    <form>
                      <FormGroup  controlId="formControlsText">
                        <FormControl  ref='input' type="text" placeholder="Enter URL" />
                      </FormGroup>
                    </form>
                  </div>
                  <div className='col-md-1' ref="selected">
                  </div>
                </div>
            </div>
            <div className='col-md-2'>
              <Button bsStyle='primary' onClick={this.send.bind(this)}> SEND</Button>
            </div>
          </div>
          <div className='row'>
            <div>
              <Button className='offset' bsStyle="primary" onClick={this.reset.bind(this)} >RESET</Button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12  responsebox'>
            <h3 className="offset"><strong>Response</strong></h3>
            {this.props.currentRequest?this.props.currentRequest.data : this.props.currentRequest.statusText}
          </div>
        </div>
      </div>
    );
  }
}
export default RequestPresentational;