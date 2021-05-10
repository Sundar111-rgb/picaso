import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  // const counter = useSelector((state) => state.counter);
  // const founter = useSelector((state) => state.founter);
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();

  const firstNaame = useSelector((state) => state.firstName);
  const lastNaame = useSelector((state) => state.lastName);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>
            Hello sundar kumar chauhan : {firstNaame} : {lastNaame}
          </h1>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
          />
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
          />

          <button
            onClick={() =>
              dispatch({
                type: "INCREMENT",
                payload: { firstName: firstname, lastName: lastname },
              })
            }
          >
            Increment
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>
            Decrement
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
