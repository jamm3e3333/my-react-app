import { useSelector, useDispatch} from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incHandler = () => {
    dispatch({type: 'INCR'})
  }

  const decHandler = () => {
    dispatch({type: 'DECR'});
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incHandler}>Increment</button>
        <button onClick={decHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
