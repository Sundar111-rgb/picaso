import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

function Info(props) {
  // const Name = useSelector((state) => state);
  //  const FirstName = useSelector((state) => state.firstNamee);
  //  const LastName = useSelector((state) => state.lastNamee);

  //  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>
            Hello {props.name.firstName},{props.name.middleName},
            {props.name.lastName}
          </h1>
          <button onClick={props.changeName("Hello")}>Click</button>
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = () => {
  // return {
  //   FirstName: state.firstName,
  //   LastName: state.lastName,
  // };
  return {
    name: { firstName: "sundar", middleName: "kumar", lastName: "chauhan" },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => {
      dispatch({
        type: "INCREMENT",
        payload: { firstName: name, lastName: "Chetan" },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
