import { useState } from "react";

export const useInput = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);


  const valueIsValid = validateState(enteredValue);
  const hasError = validateState && 

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    // isValid: "",
    valueChangeHandler,
    inputBlurHandler,
  };
};
