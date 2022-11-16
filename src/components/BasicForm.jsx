import { useState } from "react";

const BasicForm = (props) => {
  const [value, setValue] = useState({
    name: "",
    lastName: "",
    email: "",
  });
  const [isValid, setIsValid] = useState({
    name: true,
    lastName: true,
    email: true,
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValue((prevState) => ({ ...prevState, [name]: value }));
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    setIsValid({ name: true, lastName: true, email: true });
    if (value.name.trim().length === 0) {
      setIsValid({ name: false });
      console.log("else name");
    }
    if (value.lastName.trim().length === 0) {
      setIsValid({ lastName: false });
      console.log("lastname");
    }
    if (value.email.trim().length === 0 || !value.email.includes("@")) {
      setIsValid({ email: false });
      console.log("email");
    }
   
  };
  const stylesInputName = isValid.name
    ? "form-control"
    : "form-control invalid";
  const stylesInputLastName = isValid.lastName
    ? "form-control"
    : "form-control invalid";
  const stylesInputEmail = isValid.email
    ? "form-control"
    : "form-control invalid";


  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={stylesInputName}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={value.name}
            onChange={changeHandler}
          />

          {!isValid.name &&(
            <p className="error-text">Please, enter your name!!!</p>
            )}
          
        </div>
        {console.log(isValid.name)}
        {console.log(isValid.lastName)}
        {console.log(isValid.email)}
        <div className={stylesInputLastName}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            name="lastName"
            value={value.lastName}
            onChange={changeHandler}
          />
          {isValid.lastName || (
            <p className="error-text"> Please, enter your lastname!!!</p>
          )}
        </div>
      </div>
      <div className={stylesInputEmail}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          name="email"
          value={value.email}
          onChange={changeHandler}
        />
        {isValid.email || (
          <p className="error-text">
            Please, enter your email / email must comprise "@"!!!
          </p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

// import { useRef, useState } from "react";

// const BasicForm = (props) => {
//   const nameInputRef = useRef();
//   const [nameIsValid, setNameIsValid] = useState(true);
//   const [name, setName] = useState("");
//   const [isTouched, setIsToushed] = useState(true);
//   const formSubmitHandler = (e) => {
//     e.preventDefault();
//   };

//   const onBlurHandler = () => {
//     const enteredName = nameInputRef.current.value;

//     console.log("Losing focus");

//     setNameIsValid(true);

//     setIsToushed(true);

//     if (enteredName.trim().length < 5) {
//       setNameIsValid(false);

//       setIsToushed(false);

//       return;
//     }
//   };

//   const onChangeHandler = (e) => {
//     setName(e.target.value);

//     setNameIsValid(true);

//     setIsToushed(true);

//     const enteredName = nameInputRef.current.value;

//     if (enteredName.trim().length < 5) {
//       setNameIsValid(false);

//       setIsToushed(false);

//       return;
//     }
//   };

//   const nameInputClasses = nameIsValid
//     ? "form=control"
//     : "form-control invalid";

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className="control-group">
//         <div className={nameInputClasses}>
//           <label htmlFor="name">First Name</label>
//           <input
//             type="text"
//             id="name"
//             ref={nameInputRef}
//             onBlur={onBlurHandler}
//             onChange={onChangeHandler}
//           />
//           {!nameIsValid && (
//             <p className="error-text">Name should be more 5 character</p>
//           )}
//         </div>
//         <div className={nameInputClasses}>
//           <label htmlFor="name">Last Name</label>
//           <input
//             type="text"
//             id="name"
//             ref={nameInputRef}
//             onBlur={onBlurHandler}
//             onChange={onChangeHandler}
//           />
//           {!nameIsValid && (
//             <p className="error-text">Name should be more 5 character</p>
//           )}
//         </div>
//       </div>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">E-Mail Address</label>
//         <input
//           type="text"
//           id="name"
//           ref={nameInputRef}
//           onBlur={onBlurHandler}
//           onChange={onChangeHandler}
//         />
//         {!nameIsValid && (
//           <p className="error-text">Name should be more 5 character</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button disabled={!isTouched}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default BasicForm;
