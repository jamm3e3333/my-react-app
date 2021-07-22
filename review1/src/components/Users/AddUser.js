import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const onChangeUsernameHandler = (e) => {
        setUsername(e.target.value);
    }
    const onChangeAgeHandler = (e) => {
        setAge(e.target.value);
    }
    const addUserHandler = (e) => {
        e.preventDefault();
        if(!username.trim().length || !age.trim()) {
            return setError({
                title: 'Iinvalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            
        }
        if((+age) < 1) {
            return setError({
                title: 'Iinvalid age input',
                message: 'Please enter a valid (non-negative) number.'
            })
        }
        props.onAddUser({
            id: new Date().getTime(),
            username,
            age
        })
        setUsername('');
        setAge('');
    }

    const resetError = () => {
        setError(undefined);
    }

    return (
        <div>
            {error && <ErrorModal onClearError={resetError} title={error.title} message={error.message} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input value={username} onChange={onChangeUsernameHandler} id="username" type="text" />
                    <label htmlFor="age">Age (Years)</label>
                    <input value={age} onChange={onChangeAgeHandler} id="age" type="number" />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>

        </div>
    )
}

export default AddUser;