import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css'

const Expenses = (props) => {
    const [year, setSelectedYear] = useState('2020');
    const filterSelectedYear = (selectedYear) => {
        setSelectedYear(selectedYear);
        console.log(selectedYear);
    }
    const filteredExpenses = props.expenses.filter((exp) => {
        return exp.date.getFullYear().toString() === year;
    });
    

    return (
        <Card className="expenses">
            <div>
                <ExpensesFilter 
                    selected={year}
                    onFilterYear={filterSelectedYear}
                />
            </div>
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
} 

export default Expenses;