import { useState } from "react";

const SimpleInput = () => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '' ;
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = e => {
    setEnteredName(e.target.value);
  }

  const emailInputChangeHandler = e => {
    setEnteredEmail(e.target.value);
  }

  const formSubmitionHandler = e => {
    e.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if(!formIsValid) {
      return;
    }

    setEnteredEmail('');
    setEnteredName('');

    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  }

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  }

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';  
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input  onChange={nameInputChangeHandler} 
                onBlur={nameInputBlurHandler}
                value={enteredName}
                type='text' 
                id='name' 
        />
        {nameInputIsInvalid && <p className={'error-text'}>Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input  type='email'
                onChange={emailInputChangeHandler}
                onBlur={emailInputBlurHandler}
                value={enteredEmail}
                name='email'
                id='email'
        />
        {emailInputIsInvalid && <p className={'error-text'}>Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
