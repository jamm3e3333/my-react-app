import './ExpenseItem.css';

function ExpenseItem(){
    const date = new Date(2021, 5, 28);
    const title = "Expenses on car";
    const price = 239.32;
    return (
        <div className="expense-item">
            <div>{date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;