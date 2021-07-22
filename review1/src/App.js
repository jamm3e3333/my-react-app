import React, { useState } from 'react';

import UserForm from './components/UserForm';
import UserView from './components/UserView';
import './App.css';



function App() {
  const [user, setUser ] = useState({});
  return (
    <div className="App">
      <UserForm

      />
      <UserView>
        
      </UserView>
    </div>
  );
}

export default App;
