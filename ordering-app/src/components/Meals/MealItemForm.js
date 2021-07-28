import { useRef, useState } from 'react';

import classes from './MealItemForm.module.css';
import Input from '../UI/Input';

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = e => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(!enteredAmount.trim().length || enteredAmountNumber < 1 ||  enteredAmountNumber > 5) {
            return setAmountIsValid(false);
        }
        return setAmountIsValid(true);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input label="Amount" ref={amountInputRef} input={{
                id: 'amout' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealItemForm