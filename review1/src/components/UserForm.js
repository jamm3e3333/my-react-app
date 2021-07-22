import React, { useState } from 'react';

const UserFrom = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge ] = useState('');

    const userNameHandler = (e) => {
        setUsername(e.target.value);
    }

    const ageHandler = (e) => {
        setAge(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        const id = new Date().getTime().toString(); 
        const user = {
            id,
            username,
            age
        }
        props.addUser(user);
        setUsername('');
        setAge('');

    }
    return (
        <div>
            <form onSubmit={onSubmitForm} >
                <label>Username</label>
                <input onChange={userNameHandler} value={username} type="text"></input>
                <label>Age (Years)</label>
                <input  type="number" 
                        min="1"
                        step="1"
                        value={age}
                        onChange={ageHandler}
                />
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}

export default UserFrom;