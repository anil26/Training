'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';

var mockData=[
  {
    id : '1',
    name : 'Apple',
    price : '$3.0',
    availability: true
  },
  {
    id : '2',
    name : 'Orange',
    price : '$2.0',
    availability: false
  },
  {
    id : '3',
    name : 'Mango',
    price : '$5.0',
    availability: true
  },
  {
    id : '4',
    name : 'Blackberry',
    price : '$3.0',
    availability: true
  },
  {
    id : '5',
    name : 'Pineapple',
    price : '$4.0',
    availability: false
  },
  {
    id : '6',
    name : 'Guava',
    price : '$3.5',
    availability: true
  },
  {
    id : '7',
    name : 'Grapes',
    price : '$2.5',
    availability: false
  },
  {
    id : '8',
    name : 'Jerry',
    price : '$4.5',
    availability: true
  }
];

//Action Constants

const ADD_TO_CART="ADD_TO_CART";
const  REMOVE_FROM_CART="REMOVE_FROM_CART"


//Action creators
const addToCart=(item)=>{
  return {
    type :ADD_TO_CART,
    payload:{
      item :item
    }
  }

}
const removeFromCart=(item)=>{
  return {
    type :REMOVE_FROM_CART,
    payload:{
      item :item
    }
  }

}

const notifyMe=function(message){
  debugger;
  if(!("Notification") in window){
    alert("This browser doesnot support desktop notification");
  }
  else if(Notification.permission==='granted'){
    var notification=new Notification(message);
  }
  else if(Notification.permission!=='denied'){
    Notification.requestPermission(function(permission){
      if(permission==='granted'){
        var notification=new Notification(message);
      }
    });
  }
}


function cartReducer(state,action){
  switch(action.type){
    case ADD_TO_CART:
      var obj=Object.assign({},state);
      var cartItemList=obj.payload.cartItems;
      console.log(cartItemList);
      var item=cartItemList.find(function(item,index,cartItemList){
       return (item.id==action.payload.item.id);
      });
      if(item!==undefined){
        item.count++;
        return obj;
      }
      var item=action.payload.item;
      item.count=1;
      obj.payload.cartItems.push(item);
      return obj;

    case REMOVE_FROM_CART:
      var obj=Object.assign({},state,{});
      var cartItemList=obj.payload.cartItems;
      cartItemList.forEach(function(item,index,cartItemList){
        if(action.payload.item.id==item.id && item.count!==1){
          item.count--;
          return obj;
        }
        else if(action.payload.item.id==item.id && item.count==1){
          cartItemList.splice(index,1);
          return obj;
        }

      });
    default:
    return state;
  }
}
class Addp extends React.Component{
  add(item){
    debugger;
    store.dispatch(addToCart(item));
    notifyMe("Added  " + item.name + "  to Cart" );
  }

  render(){
    var item=this.props.item;
    return (
      <div>
        <button onClick={this.add.bind(this,item)}>Add</button>
      </div>
    );
  }
}

class Imagep extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
      <img src="#"></img>
      </div>
    );
  }
}

class Pricep extends React.Component{
  render(){
    return (
      <div>{this.props.price}</div>
    );
  }
}


class Item extends React.Component{
  constructor(props){
    super(props);
  }
  createHTML(array){
    return array.map(function(current,index,array){
      return (<div key={current.id}><Imagep></Imagep><Pricep price={current.price}></Pricep><Addp item={current}></Addp></div>);
    });
  }
  render(){
    return (
      <div>
      {this.createHTML(this.props.data)}
      </div>
    );
  }
}

class CartItem extends React.Component{
  convertToInt(value){
  var t=value.split("");
  t.shift();
  var s=t.join("");
  return parseFloat(s);
  }
  remove(current){
    store.dispatch(removeFromCart(current));
  }
  render(){
    return (
      <div>
      <div>{this.props.item.name}</div>
      <div>{this.props.item.count}</div>
      <div>{this.props.item.price}</div>
      <div>Price :{parseInt(this.props.item.count)*this.convertToInt(this.props.item.price)}</div>
      <button onClick={this.remove.bind(this,this.props.item)}>Remove</button>
      </div>
    );
  }
}

class Quantity extends React.Component{
  render(){
    return (
      <div>{this.props.count}</div>
    );
  }
}
class Cart extends React.Component{
  createCartItems(){
    var item=store.getState().payload.cartItems;
    return item.map(function(current,index,array){
      return (<CartItem  id={item.name} item={current}></CartItem>);
    });
  }
  render(){
    return (
      <div>
      {this.createCartItems()}
      </div>
    );
  }
}

class App extends React.Component{
  render(){
    return (
      <div>
        <h1 className='text-primary'>Online Shopping </h1>
        <h2>Items</h2>
        <Item data={mockData}></Item>
        <Cart/>
      </div>
    );
  }
}

window.__INITIALSTATE__={
  payload:{
    cartItems : []
  }
};

var store=createStore(cartReducer,window.__INITIALSTATE__);

function render(){
  ReactDOM.render(<App />,document.getElementById('app'));
}
render()
store.subscribe(render);










