import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import Expenses from './Expenses';

function ExpenseItem(props){
    
    return (
        <div className="expense-item">
            <ExpenseDate 
                date={props.date}
                month={props.month}
                year={props.year}
            />
            <Expenses 
                title={props.title}
                amount={props.amount}
            />
        </div>
    )
}

export default ExpenseItem;