import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css'

const Expenses = (props) => {

    return (
        <Card className="expenses">
            {props.expenses.map((exp) => {
                return (
                    <ExpenseItem 
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