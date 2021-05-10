import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "bootstrap";

const ArrayAccess = (props) => {

  const [id, setId] = useState(0);
  const [name, setName] = useState('');

  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const AddData = () => {
     dispatch({ type: "Add",payload: name })
   }

  return (
    <div>
      ID:{" "}
      <input
        type="text"
        name="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      Name:{" "}
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => AddData}>Add</button>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
        </thead>
        <tbody>
          {props.data.map((item, i) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "increment",
                        payload: { index: i, value: name },
                      })
                    }
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "decrement",
                        payload: { index: i, value: name },
                      })
                    }
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={props.increment}>Click</button>
      <button onClick={props.decrement}>Click</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () =>
      dispatch({
        type: "increment",
        payload: { index: 1, value: 'raghav' },
      }),
    decrement: () =>
      dispatch({
        type: "decrement",
        payload: { index: 2, value: 'harsh' },
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArrayAccess);
