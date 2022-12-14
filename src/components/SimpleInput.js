import React, { useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';

  const nameInputChangeHandler = (event) => {
    setEnteredNameTouched(true);
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
   setEnteredNameTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // to disable the default behaviour of the form tag

    if (!enteredNameIsValid) { 
      return;
    }

    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const nameInputClasses = enteredNameTouched && !enteredNameIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && enteredNameTouched && <p className="errorText">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
