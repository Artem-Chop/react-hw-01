import { createStore, combineReducers } from 'redux';
import { types } from './types';

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACTS:
      return [...state, payload];
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts,
  filter,
});

const store = createStore(rootReducer);

export default store;
