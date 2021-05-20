import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

const Danish = ({data, submit, submitt, submittt}) => {
  const NameRef = useRef(null);
  const AddressRef = useRef(null);

  useEffect(() => {
    NameRef.current.focus();
  });

  function firstKeyDown(e) {
    if (e.key == "Enter") {
      AddressRef.current.focus();
    }
  }

   function lastKeyDown(e) {
    if (e.key == "Enter") {
      AddressRef.current.focus();
    }
  }

  return (
    <div className="App-header">
      <input
        type="text"
        onKeyDown={firstKeyDown}
        ref={NameRef}
        placeholder="enter first name"
      />
      <br />
      <input
        type="text"
        onKeyDown={lastKeyDown}
        ref={AddressRef}
        placeholder="enter last name"
      />
      <br />
      <button
        onClick={() => {
          submit(NameRef.current.value, AddressRef.current.value);
        }}
      >
        Click
      </button>
      <button
        onClick={() => {
          submitt("Rajat", "Sharma");
        }}
      >
        Click
      </button>
      <button
        onClick={() => {
          submittt("Rajan", "Banglore");
        }}
      >
        Click
      </button>
      <h1>{data}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (name, address) => {
      dispatch({
        type: "increment",
        payload: { name: name, address: address },
      });
    },
    submitt: (name, address) => {
      dispatch({
        type: "decrement",
        payload: { name: name, address: address },
      });
    },
    submittt: (name, address) => {
      dispatch({
        type: "precrement",
        payload: { name: name, address: address },
      });
    },
  };
};

//export default connect(mapStateToProps, mapDispatchToProps)(Danish);

export default connect(
  (state) => {
    return {
      data: state,
    };
  },
  (dispatch) => {
    return {
      submit: (name, address) => {
        dispatch({
          type: "increment",
          payload: { name: name, address: address },
        });
      },
      submitt: (name, address) => {
        dispatch({
          type: "decrement",
          payload: { name: name, address: address },
        });
      },
      submittt: (name, address) => {
        dispatch({
          type: "precrement",
          payload: { name: name, address: address },
        });
      },
    };
  }
)(Danish);
