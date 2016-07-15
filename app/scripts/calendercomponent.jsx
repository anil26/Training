'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import * as CalenderActions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { numberToMonthMapping } from './helper';
NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
class Calender extends React.Component{
  constructor(props){
    super(props);
    this.state={
    date : this.props.date
   };
  }
  highLightDate(){
    var dateToBehighLighted=ReactDOM.findDOMNode(this.refs.table);
    var t=document.getElementById(this.props.date.day);
    t.className="selected";
  }
  backGround(){
    var dataToBeBackGround=ReactDOM.findDOMNode(this.refs.table);
    var t=dataToBeBackGround.getElementsByClassName("selected");
    var m=Array.prototype.slice.call(t);
    m.forEach(function(element,index,array){
      element.className="noclass"
    })
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      date : this.props.date
    });
  }
  componentDidUpdate(prevProps,prevState){//Now I have the access to DOM
    this.backGround();
    this.highLightDate();

  }

  componentDidMount(prevProps,prevState){
    this.highLightDate();
  }
  render(){
    return (
      <div className='calender'>
        <header>
          <h2>{numberToMonthMapping[this.props.date.month]} {this.props.date.year}</h2>
        </header>
        <table>
          <tbody ref="table">
            <tr>
              <td>S</td>
              <td>M</td>
              <td>T</td>
              <td>W</td>
              <td>Th</td>
              <td>F</td>
              <td>S</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td id="1">1</td>
              <td id="2">2</td>
              <td id="3">3</td>
              <td id="4">4</td>
              <td id="5">5</td>
            </tr>
            <tr>
              <td id="6">6</td>
              <td id="7">7</td>
              <td id="8">8</td>
              <td id="9">9</td>
              <td id="10">10</td>
              <td id="11">11</td>
              <td id="12">12</td>
            </tr>
            <tr>
              <td id="13">13</td>
              <td id="14">14</td>
              <td id="15">15</td>
              <td id="16">16</td>
              <td id="17">17</td>
              <td id="18">18</td>
              <td id="19">19</td>
            </tr>
            <tr>
              <td id="20">20</td>
              <td id="21">21</td>
              <td id="22">22</td>
              <td id="23">23</td>
              <td id="24">24</td>
              <td id="25">25</td>
              <td id="26">26</td>
            </tr>
            <tr>
              <td id="27">27</td>
              <td id="28">28</td>
              <td id="29">29</td>
              <td id="30">30</td>
              <td id="31">31</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


// const mapStateToProps=(state)=>({
//   dayObject : state.calenderState
// });
// const mapDispatchToProps=(dipatch)=>({
// actions : bindActionCreators(CalenderActions,dispatch)
// });



// export default connect(mapStateToProps.mapDispatchToProps)(Calender);
export default Calender;