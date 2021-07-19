import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
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
    })
    return (
        <Card className="expenses">
            <div>
                <ExpensesFilter 
                    selected={year}
                    onFilterYear={filterSelectedYear}
                />
            </div>
            {!filteredExpenses.length && <p>No expenses found.</p>}
            {filteredExpenses.length > 0 && filteredExpenses.map((exp) => {
                return (
                    <ExpenseItem 
                        key={exp.id}
                        title={exp.title}
                        amount={exp.amount}
                        date={exp.date}
                    />
                )
            })}
        </Card>
    )
} 

export default Expenses;