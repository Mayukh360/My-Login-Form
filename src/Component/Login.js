import React, { useState, useRef, useEffect } from "react";

export default function Login() {
  const[nameInput,setnameInput]=useState('');
  const[emailInput,setemailInput]=useState('');
  const [isValid, setIsvalid] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  useEffect(()=>{
    console.log('checking')
    setIsvalid(nameInput.trim().length>4 && emailInput.includes('@'))
  },[nameInput,emailInput])

  const nameChangeHandler = (event) => {
setnameInput(event.target.value);
  };

  const emailChangeHandler = (event) => {
  setemailInput(event.target.value)
  };

  const onSumbitHandler = (event) => {
    event.preventDefault();
    console.log(nameInput);
    console.log(emailInput);
   
  };

  return (
    <div>
      <form onSubmit={onSumbitHandler}>
        <label>
          <b>Name</b>
        </label>
        <input value={nameInput}  type="text" ref={nameRef} onChange={nameChangeHandler} />
        <br />
        <label>
          <b>Email</b>
        </label>
        <input value={emailInput}  type="email" ref={emailRef} onChange={emailChangeHandler} />
        <br />
        <button disabled={!isValid}  type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
