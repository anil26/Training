'use strict';
import React from 'react';
import ReactDOM from 'react-dom'
import SearchForm from './searchform';
import { applyMiddleware, compose, createStore } from 'redux';
import { getData } from './actions'
import weatherReducer from './reducer';
import  fetch from 'isomorphic-fetch';

window.__INITIALSTATE__={
  properties :{
    weatherList : []
  },
  currentCityWeather:{},
  statusText : null
}
var store=createStore(weatherReducer,window.__INITIALSTATE__);
class App extends React.Component{
  constructor(props){
    super(props);
  }
  getWeather(store,city){

  getData(store,city);
  }
  render(){
    var currentCityWeather=store.getState().currentCityWeather;
    var temperature,description;
    if(currentCityWeather.main=== undefined && currentCityWeather.description===undefined){
      temperature='';
      description='';
    }else{
      temperature=currentCityWeather.main.temp + '°C';
      description=currentCityWeather.weather[0].description;
    }
    return (
      <div>
      <h1 className='centerform'>Weather Reporter</h1>
      <SearchForm store={store} getWeather={this.getWeather.bind(this)}></SearchForm>
      <h2 className='centerform'>{temperature} {description}</h2>
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
