import React, { useState, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: "increment" });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }

  return (
    <>
      <button onClick={decrement}>Increase</button>
      <h1>...{state.count}</h1>
      <button onClick={increment}>Decrease</button>
    </>
  );
}
