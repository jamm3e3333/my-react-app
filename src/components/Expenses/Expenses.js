import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css'

const Expenses = (props) => {
    const [year, setSelectedYear] = useState('2020');
    const filterSelectedYear = (selectedYear) => {
        setSelectedYear(selectedYear);
    }
    return (
        <Card className="expenses">
            <div>
                <ExpensesFilter 
                    selected={year}
                    onFilterYear={filterSelectedYear}
                />
            </div>
            {props.expenses.filter((expFil) => {
                return expFil.date.toLocaleString('en-US',{year: 'numeric'}) === year;
            })
            .map((exp) => {
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