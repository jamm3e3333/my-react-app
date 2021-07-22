import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const onChangeUsernameHandler = (e) => {
        setUsername(e.target.value);
    }
    const onChangeAgeHandler = (e) => {
        setAge(e.target.value);
    }
    const addUserHandler = (e) => {
        e.preventDefault();
        if(!username.trim().length || !age.trim()) {
            return;
        }
        if((+age) < 1) {
            return;
        }
        setUsername('');
        setAge('');
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input value={username} onChange={onChangeUsernameHandler} id="username" type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input value={age} onChange={onChangeAgeHandler} id="age" type="number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;