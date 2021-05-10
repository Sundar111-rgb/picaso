import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Info from "./Info";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer1, rootReducer2, rootReducer3, rootReducer4 } from "./reducer/rootReducer";
import { combineReducers } from "redux";
import { ROOTREDUCER1, ROOTREDUCER2 } from "../src/types/types";

import Qwerty from "./Qwerty";
import Counter from "./Counter";
import SquareTest from "./SquareTest";
import Crud from "./Crud";
import ArrayAccess from "./ArrayAccess";
import Howtouseref from "./Howtouseref";
import Danish from "./Danish";
const rootReducer = combineReducers({
  reduce1: [ROOTREDUCER1],
  reduce2: [ROOTREDUCER2],
});

// const store = createStore(
//   combineReducers({
//     rootReducer1,
//     rootReducer2,
//   })
// );

const store = createStore(rootReducer4);

console.log("------->>>>>>>------", store.getState());
ReactDOM.render(
  <React.StrictMode>
     <Provider
      store={store}>
      <Crud /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
