import { useState, useRef } from "react";


const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const inputRef = useRef();

  const nameInputChangeHandler = e => {
    const name = e.target.value;
    setEnteredName(name);
  }

  const formSubmitionHandler = e => {
    e.preventDefault();
    setEnteredNameTouched(true);
    
    if(enteredName.trim() === '') {
      return setEnteredNameIsValid(false);
    }
    setEnteredNameIsValid(true);
    setEnteredName('');
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';  

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input  ref={inputRef}
                onChange={nameInputChangeHandler} 
                value={enteredName}
                nameIntype='text' 
                id='name' 
        />
        {nameInputIsInvalid && <p className={'error-text'}>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
