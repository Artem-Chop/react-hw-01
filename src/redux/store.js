import { configureStore } from '@reduxjs/toolkit';
import mainSlice from './slice';

// const contactsReducer = createReducer([], builder => {
//   builder.addCase(fetchContactsSuccess, (state, { payload }) => {
//     return payload;
//   });
//   builder.addCase(addContactSuccess, (state, { payload }) => {
//     return [...state, payload];
//   });
//   builder.addCase(deleteContactSuccess, (state, { payload }) => {
//     return state.filter(contact => contact.id !== payload);
//   });
// });

// const filterReducer = createReducer('', builder => {
//   builder.addCase(changeFilter, (state, { payload }) => {
//     return payload;
//   });
// });

// const loadingReducer = createReducer(false, builder => {
//   builder.addCase(fetchContactsRequest, () => true);
//   builder.addCase(fetchContactsSuccess, () => false);
//   builder.addCase(fetchContactsError, () => false);

//   builder.addCase(addContactRequest, () => true);
//   builder.addCase(addContactSuccess, () => false);
//   builder.addCase(addContactError, () => false);

//   builder.addCase(deleteContactRequest, () => true);
//   builder.addCase(deleteContactSuccess, () => false);
//   builder.addCase(deleteContactError, () => false);
// });

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
//   loading: loadingReducer,
// });

const store = configureStore({
  reducer: mainSlice,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
