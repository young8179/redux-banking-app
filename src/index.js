import {createStore} from "redux"
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();





console.log("starting banking app")

const defaultState = {
  balance: 0
}

const actionIncrement = {
  type: "INCREMENT",
  payload:{
    amount: 1
  }
}

const actionDecrement = {
  type: "DECREMENT",
  payload:{
    amount: 1
  }
}

function increment(num){
  return {
    type:"INCREMENT",
    payload: {
      amount: num
    }
  }
}

function decrement(num){
  return {
    type:"DECREMENT",
    payload: {
      amount: num
    }
  }
}

// function accountReducer(state=defaultState, action) {
//   if( action.type === "INCREMENT"){
//     return {
//       balance: state.balance + 1
//     }
//   }
//   if(action.type ==="DECREMENT"){
//     return{
//       balance: state.balance -1
//     }  
//   }
//   return state
// }

function accountReducer(state=defaultState, action) {
  switch(action.type){
    case "INCREMENT":
      return {
        balance: state.balance + action.payload.amount
      }
    case "DECREMENT":
      return {
        balance: state.balance - action.payload.amount
      }
    default:
      return state;
  }
}

const store = createStore(accountReducer)

store.subscribe(()=>{
  console.log("========state updated!=========")
  const state = store.getState()
  console.log(state)
})

window.store = store;
window.increment = increment
window.decrement = decrement
window.actionIncrement = actionIncrement;
window.actionDecrement = actionDecrement;
