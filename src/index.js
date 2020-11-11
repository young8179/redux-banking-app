// import {createStore} from "redux"
import React from 'react';
import {Provider} from "react-redux"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/store"


ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />

  </Provider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





console.log("starting banking app")

// const defaultState = {
//   checking: 100,
//   saving: 100
// }

// const actionIncrement = {
//   type: "INCREMENT",
//   payload:{
//     amount: 1
//   }
// }

// const actionDecrement = {
//   type: "DECREMENT",
//   payload:{
//     amount: 1
//   }
// }

// const ACTION_INCREMENT = "INCREMENT"
// const ACTION_DECREMENT ="DECREMENT"

// function increment(num, account){
//   return {
//     type:ACTION_INCREMENT,
//     payload: {
//       amount: num,
//       account  //==  account: account
//     }
//   }
// }

// function decrement(num, account){
//   return {
//     type:ACTION_DECREMENT,
//     payload: {
//       amount: num,
//       account: account
//     }
//   }
// }

// // function accountReducer(state=defaultState, action) {
// //   if( action.type === "INCREMENT"){
// //     return {
// //       balance: state.balance + 1
// //     }
// //   }
// //   if(action.type ==="DECREMENT"){
// //     return{
// //       balance: state.balance -1
// //     }  
// //   }
// //   return state
// // }

// // {
// //   type: "INCREMENT",
// //   payload: {
// //     amount: 50,
// //     account: "saving"
// //   }
// // }

// function accountReducer(state=defaultState, action) {
//   switch(action.type){
//     case ACTION_INCREMENT:
//       return {
//         ...state,
//         [action.payload.account]: state[action.payload.account] + action.payload.amount
//       }
//     case ACTION_DECREMENT:
//       return {
//         ...state,
//         [action.payload.account]: state[action.payload.account] - action.payload.amount
//       }
//     default:
//       return state;
//   }
// }

// const store = createStore(accountReducer)

// store.subscribe(()=>{
//   console.log("========state updated!=========")
//   const state = store.getState()
//   console.log(state)
// })

// window.store = store;
// window.increment = increment
// window.decrement = decrement
// window.actionIncrement = actionIncrement;
// window.actionDecrement = actionDecrement;
