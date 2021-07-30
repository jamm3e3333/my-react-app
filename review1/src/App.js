import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = (props) => {
  const [users, setUsers]  = useState([{
    id: 'u1',
    username: 'Jakub',
    age: 32
  },{
    id: 'u2',
    username: 'Jessica',
    age: 90
  }])

  const addUser = (user) => {
    setUsers((prevState) => {
      return [...prevState, user];
    })
  }

  const deleteUser = (id) => {
    setUsers((prevState) => {
      return prevState.filter(us => id !== us.id)
    })
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={addUser}/>      
      <UsersList onDeleteUser={deleteUser} users={users} />
    </React.Fragment>
  )
}

export default App;
