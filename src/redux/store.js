import {
  createAction,
  configureStore,
  combineReducers,
  createReducer,
} from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './actions';
import { changeFilter } from './actions';

// import mainSlice from './slice';

const contactsReducer = createReducer([], builder => {
  builder.addCase(fetchContactsSuccess, (_, { payload }) => {
    return payload;
  });
  builder.addCase(addContactSuccess, (state, { payload }) => {
    return [...state, payload];
  });
  builder.addCase(deleteContactSuccess, (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  });
});

const filterReducer = createReducer('', builder => {
  builder.addCase(changeFilter, (_, { payload }) => {
    return payload;
  });
});

const loadingReducer = createReducer(false, builder => {
  builder.addCase(fetchContactsRequest, () => true);
  builder.addCase(fetchContactsSuccess, () => false);
  builder.addCase(fetchContactsError, () => false);

  builder.addCase(addContactRequest, () => true);
  builder.addCase(addContactSuccess, () => false);
  builder.addCase(addContactError, () => false);

  builder.addCase(deleteContactRequest, () => true);
  builder.addCase(deleteContactSuccess, () => false);
  builder.addCase(deleteContactError, () => false);
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
