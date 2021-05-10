import React from "react";
import { useSelector, connect, useDispatch } from "react-redux";

import { FIRSTNAME, LASTNAME } from "./types/types";

const Qwerty = (props) => {
  const name1 = useSelector((state) => state.rootReducer1[FIRSTNAME]);
  const name2 = useSelector((state) => state.rootReducer1[LASTNAME]);

  const dispatch = useDispatch();
  return (
    <div>
      <br />
      <h1>
        FirstName: {name1}, LastName: {name2}
      </h1>
      <br />

      <h1>
        FirstName: {props.Name.firstNamee},LastName: {props.Name.lastNamee}
      </h1>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
            payload: {
              [FIRSTNAME]: "Vijay..",
              [LASTNAME]: "Deverakonda...",
              firstNamee: "Rahul.....",
              lastNamee: "Rohan.....",
            },
          })
        }
      >
        INCREMENT
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT",
            payload: {
              [FIRSTNAME]: "Vijay..........",
              [LASTNAME]: "Deverakonda................",
              firstNamee: "Rahul..",
              lastNamee: "Rohan...",
            },
          })
        }
      >
        DECREMENT
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Name: state.rootReducer2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () =>
      dispatch({
        type: "INCREMENT",
        payload: {
          [FIRSTNAME]: "Samantha",
          [LASTNAME]: "Akeneni",
          firstNamee: "dinesh",
          lastNamee: "rishant",
        },
      }),
    decrement: () =>
      dispatch({
        type: "DECREMENT",
        payload: {
          [FIRSTNAME]: "Vijay",
          [LASTNAME]: "Deverakonda",
          firstNamee: "Rahul",
          lastNamee: "rohan",
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Qwerty);
