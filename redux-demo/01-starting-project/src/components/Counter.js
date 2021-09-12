import { useRef } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch();

  const inputAmountRef = useRef();

  const incHandler = () => {
    dispatch({type: 'INCR'})
  }

  const decHandler = () => {
    dispatch({type: 'DECR'});
  }

  const increaseHandler = () => {
    dispatch({type: 'INCREASE', amount: Number.parseInt(inputAmountRef.current.value)})
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'VISIBILITY'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incHandler}>Increment</button>
        <div>
          <button onClick={increaseHandler}>Increase by the amount</button>
          <br />
          <label htmlFor="increase">Increase by the amount</label>
          <input 
            type="number"   
            min="1" 
            max="100" 
            count="1" 
            ref={inputAmountRef} 
          />
        </div>
        <button onClick={decHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
