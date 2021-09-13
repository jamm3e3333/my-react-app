import { useState } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/auth-slice';

function App() {
  const [email, setEmail] = useState('');
  const authenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logInHandler = (credentials) => {
    setEmail(credentials);
    dispatch(authActions.logIn())
  }

  const logOutHandler = () => {
    dispatch(authActions.logOut());
  }

  return (
    <>
      <Header logOut={logOutHandler} authenticated={authenticated} />
      {!authenticated && <Auth logIn={logInHandler} />}
      {authenticated && <UserProfile email={email} />}
      <Counter />
    </>
  );
}

export default App;
