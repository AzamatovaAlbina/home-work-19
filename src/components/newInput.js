import { useRef, useState } from "react";

const newInput = (props) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    
    if(!enteredNameIsValid){
        return
    }
  };


  const nameInputClasses = nameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
        />
        {!nameIsValid && (
          <p className="error-text">Name should be more 5 character</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isTouched}>Submit</button>
      </div>
    </form>
  );
};

export default newInput;
