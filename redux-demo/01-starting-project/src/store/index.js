import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: false};

const counterReducer = (state = initialState , action) => {
    if(action.type === 'INCR') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        }
    }
    if(action.type === 'DECR') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
    if(action.type === 'INCREASE') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        }
    } 
    if(action.type === 'VISIBILITY') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;