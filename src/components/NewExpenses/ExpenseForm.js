import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: e.target.value
            }
        });
    }
    const amountChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: e.target.value
            }
        });
    }
    const dateChangeHandler = (e) => {
        setUserInput((prevState) => {
            return
        });
    }
    
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input onChange={titleChangeHandler} type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={amountChangeHandler} type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={dateChangeHandler} type="date" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;