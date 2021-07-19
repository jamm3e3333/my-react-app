import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css'

const Expenses = (props) => {

    return (
        <Card className="expenses">
            <div>
                <ExpensesFilter 
                
                />
            </div>
            {props.expenses.map((exp) => {
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