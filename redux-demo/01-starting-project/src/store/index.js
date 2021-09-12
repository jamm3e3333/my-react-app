import redux from 'redux';

function counterReducer(state = { counter: 0}, action) {
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
}

const store = redux.createStore(counterReducer);

function counterSubscriber() {
    const latestState = store.getState();
    console.log(latestState);
}

export default store;