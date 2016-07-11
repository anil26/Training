'use strict'
import * as weatherActions from './constants.jsx';

var state={
    properties :{
        weatherList :[]
    },
    statusText : null
};


function weatherReducer(state,action){
  switch(action.type){
    case weatherActions.DATA_FETCH_REQUEST_FROM_STATE:
    var obj=Object.assign({},state,{});
    obj.statusText="Returned from store";
    obj.currentCityWeather=action.data;
    return obj;

    case weatherActions.DATA_FETCH_SUCCESS_FROM_CALL:
    var obj=Object.assign({},state,{});
    if(action.data.weather===undefined){
        obj.statusText="City not found";
        return obj;
    }
    obj.properties.weatherList.push(action.data);
    obj.statusText=action.statusText;
    obj.currentCityWeather=action.data;
    return obj;

    case weatherActions.DATA_FETCH_FAILURE_FROM_CALL:
    var error= action.statusText;
    var obj={statusText : error,currentCityWeather:{}};
    return Object.assign({},state,obj);

    case weatherActions.DATA_FETCH_REQUEST_FROM_CALL:
    return Object.assign({},state,{
      statusText : "Data is being requested"
    });

    default :
    return state;



  }
}

export default weatherReducer;