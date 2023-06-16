import { createStore, combineReducers } from 'redux';

const valueReducer = (state = 0, actions) => {
  switch (actions.type) {
    case 'counter/increment':
      return state + actions.payload;

    case 'counter/decrement':
      return state - actions.payload;

    default:
      return state;
  }
};
const stepReducer = (state = 1) => state;

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

const rootReducer = combineReducers({ counter: counterReducer });

const store = createStore(rootReducer);

export default store;
