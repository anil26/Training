'use strict'
import React from 'react';
import Spinner from './spinner';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Board from './Board';
import TypeField from './TypeField';
import * as TypeRacerActionCreators from './action';

//var t1= t.split(/<\/?p>/);
// t2=t1.join("");
// t3=t2.trim();
//<p><span>hi</span><span> </span><span>my</span><span>self</span><span>anil kumar chaudhary</span></p>
class App extends React.Component{


  render(){
    return (
        <div>
          <Board randomText={this.props.randomText} currentWord={this.props.currentWord} isWrongWord={this.props.isWrongWord}/>
          <TypeField randomText={this.props.randomText} currentWord={this.props.currentWord} isWrongWord={this.props.isWrongWord}/>
        </div>
    );
  }
}
// class App extends React.Component{
//   render(){
//     return (
//         <div>
//           <p><span><u>hi</u></span><span> </span><span>my</span><span>self</span><span>anil kumar chaudhary</span></p>
//         </div>
//     );
//   }
// }



const mapStateToProps = (state) => ({
  randomText : state.randomText,
  currentWord : state.currentWord,
  isWrongWord : state.isWrongWord
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(TypeRacerActionCreators, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(App);



// export default App;
// randomText:t3.split(" "),
//   wordPosition : 0,
//   isWrongWord : false,
//   currentWord : {
//     index : 0,
//   },
//   statusText:''