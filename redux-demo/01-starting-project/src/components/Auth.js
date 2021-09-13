import classes from './Auth.module.css';
import { useRef } from 'react';

const Auth = (props) => {
  const emailRef = useRef();
  const passRef = useRef();

  const submitHandler = e => {
    e.preventDefault();

    if(emailRef.current.value.trim() === '' ||
      passRef.current.value.trim() === '') {
      return;
    }

    props.logIn(emailRef.current.value.trim());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passRef} />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
