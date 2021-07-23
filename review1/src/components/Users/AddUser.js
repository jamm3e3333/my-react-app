import React, { useState, Fragment, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        const currentName = nameInputRef.current.value;
        const currentAge = ageInputRef.current.value;

        if(!currentName.trim().length || !currentAge.trim()) {
            return setError({
                title: 'Iinvalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            
        }
        if((+currentAge) < 1) {
            return setError({
                title: 'Iinvalid age input',
                message: 'Please enter a valid (non-negative) number.'
            })
        }
        props.onAddUser({
            id: new Date().getTime(),
            username: currentName,
            age: currentAge
        });

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        nameInputRef.current.focus();
    }

    const resetError = () => {
        setError(undefined);
    }

    return (
        <Fragment>
            {error && <ErrorModal 
                        onConfirm={resetError} 
                        title={error.title} 
                        message={error.message} 
                      />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input  
                        id="username" 
                        type="text" 
                        ref={nameInputRef}
                    />
                        
                    <label htmlFor="age">Age (Years)</label>

                    <input  
                        id="age" 
                        type="number" 
                        ref={ageInputRef}
                    />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Fragment>
    )
}

export default AddUser;