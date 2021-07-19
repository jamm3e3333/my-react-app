import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [ renderForm, updateRenderForm ] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        updateRenderForm(false);
    }

    const renderButtonHandler = () => {
        updateRenderForm(false);
    }
    const renderFormHandler = () => {
        updateRenderForm(true);
    }
    return (
        <div className="new-expense">
        {!renderForm && <button onClick={renderFormHandler}>Add New Expenses</button>}
        {renderForm && <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onRenderButtonHandler={renderButtonHandler}
        />}
            
            
        </div>
    )
}

export default NewExpense;