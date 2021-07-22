import React, { useState } from 'react';

import UserForm from './components/UserForm';
import UserView from './components/UserView';
import './App.css';



function App() {
  const [user, setUser ] = useState([]);
  
  const onAddUser = (user) => {
    setUser((prevState) => {
      return [...prevState, user];
    })
  }

  const onDeleteUser = (id) => {
    setUser((prevState) => {
      return prevState.filter( us => us.id !== id);
    })
  }

  return (
    <div className="App">
      <UserForm
        addUser={onAddUser}  
      />

      <UserView 
        deleteUser={onDeleteUser}
        item={user}
      />
    </div>
  );
}

export default App;
