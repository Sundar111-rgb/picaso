import React, { useEffect, useRef } from "react";

function Howtouseref() {
  const firstNameRef = useRef(null);
  const lastNameRef  = useRef(null);
  const emailRef     = useRef(null);
  const passwordRef  = useRef(null);
  const submitRef    = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  function firstKeyDown(e) {
    if (e.key == "Enter") {
      lastNameRef.current.focus();
    }
  }

  function lastKeyDown(e) {
    if (e.key == "Enter") {
      emailRef.current.focus();
    }
  }

  function emailKeyDown(e) {
    if (e.key == "Enter") {
      passwordRef.current.focus();
    }
  }

  function passwordKeyDown(e) {
    if (e.key == "Enter") {
      submitRef.current.focus();
    }
  }

  const submitKeyDown = () => {
    console.log(
        firstNameRef.current.value,
         lastNameRef.current.value,
            emailRef.current.value,
         passwordRef.current.value
    );
  }

  return (
    <div className="App">
      <input
        type="text"
        onKeyDown={firstKeyDown}
        ref={firstNameRef}
        placeholder="enter first name"
      />
      <br />
      <input
        type="text"
        onKeyDown={lastKeyDown}
        ref={lastNameRef}
        placeholder="enter last name"
      />
      <br />
      <input
        type="text"
        onKeyDown={emailKeyDown}
        ref={emailRef}
        placeholder="enter email"
      />
      <br />
      <input
        type="text"
        onKeyDown={passwordKeyDown}
        ref={passwordRef}
        placeholder="enter mobile"
      />
      <br />
      <button onKeyDown={submitKeyDown} ref={submitRef}>
        Submit
      </button>
    </div>
  );
}

export default Howtouseref;
