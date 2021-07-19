import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // const [usetInput, setEnteredInput ] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    const [enteredTitle, setEnteredTitle ] = useState('');
    const [enteredAmount, setEnteredAmount ] = useState('');
    const [enteredDate, setEnteredDate ] = useState('');

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: e.target.value
        //     }
        // });
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: e.target.value
        //     }
        // });
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate: e.target.value
        //     }
        // });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input  onChange={titleChangeHandler} 
                            value={enteredTitle} 
                            type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input  onChange={amountChangeHandler} 
                            value={enteredAmount} 
                            type="number" 
                            min="0.01" 
                            step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input  onChange={dateChangeHandler} 
                            value={enteredDate} 
                            type="date" 
                            min="2019-01-01" 
                            max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onRenderButtonHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;