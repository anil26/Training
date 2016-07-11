'use strict';
import React from 'react';
import ReactDOM from 'react-dom'
import SearchForm from './searchform';
import { compose, createStore,applyMiddleware } from 'redux';
import { getData } from './actions'
import weatherReducer from './reducer';
import thunk from './thunks';

window.__INITIALSTATE__={
  properties :{
    weatherList : []
  },
  currentCityWeather:{},
  statusText : null
}
var middleWare=applyMiddleware(thunk);
var createStoreWithMiddleWare=compose(middleWare,window.devToolsExtension ? window.devToolsExtension() : f => f);
const store=createStoreWithMiddleWare(createStore)(weatherReducer,window.__INITIALSTATE__);

class App extends React.Component{
  constructor(props){
    super(props);
  }
  getWeather(store,city){
    getData(store,city);
  }
  render(){
    var currentCityWeather=store.getState().currentCityWeather;
    var temperature,description,errormessage;

    if(Object.keys(currentCityWeather).length===0 || currentCityWeather.main=== undefined && currentCityWeather.description===undefined){
      temperature='';
      description='';
      errormessage=store.getState().statusText;
    }
    else{
      temperature=currentCityWeather.main.temp + '°C';
      description=currentCityWeather.weather[0].description;
      errormessage='';
    }
    return (
      <div>
      <h1 className='centerform'>Weather Reporter</h1>
      <SearchForm store={store} getWeather={this.getWeather.bind(this)}></SearchForm>
      <h2 className='centerform'>{temperature} {description} {errormessage}</h2>
      </div>
      );
  }
}


ReactDOM.render(<App />,document.getElementById('app'));

function render(){
  ReactDOM.render(<App />,document.getElementById('app'));
}
render();
store.subscribe(render);
