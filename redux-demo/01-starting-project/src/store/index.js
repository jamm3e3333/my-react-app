import { createStore } from 'redux';

const counterReducer = (state = { counter: 0}, action) => {
    if(action.type === 'INCR') {
        return {
            counter: state.counter + 1,
        }
    }
    if(action.type === 'DECR') {
        return {
            counter: state.counter - 1,
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;