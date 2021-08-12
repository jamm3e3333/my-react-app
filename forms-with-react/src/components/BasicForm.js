import useInput from '../hooks/use-input';

const BasicForm = (props) => {

  const {
    value: firstNameInputEntered,
    isValid: firstNameInputIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: lastNameInputEntered,
    isValid: lastNameInputIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: emailInputEntered,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[a-z]{2,}$/i.test(value));

  let formIsValid = false;

  if(firstNameInputIsValid && lastNameInputIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = e => {
    e.preventDefault();
    if(!formIsValid) {
      return;
    }
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  const inputFirstNameClasses  = firstNameInputHasError ? 'form-control invalid' : 'form-control';
  const inputLastNameClasses  = lastNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailNameClasses  = emailHasError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={inputFirstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name' 
            value={firstNameInputEntered}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputHasError && <p className={'error-text'}>Please provide correct first name.</p>}
        </div>
        <div className={inputLastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='name' 
            value={lastNameInputEntered}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputHasError && <p className={'error-text'}>Please provide correct last name.</p>}
        </div>
      </div>
      <div className={emailNameClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='email' 
          id='name' 
          value={emailInputEntered}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className={'error-text'}>Please provide correct email address.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
