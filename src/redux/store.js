import {
  configureStore,
  createReducer,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as actions from './actions';

const persistConfig = {
  key: 'Contacts',
  storage,
  whitelist: ['contacts'],
};
const initialContactsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = createReducer(initialContactsState, {
  [actions.addContact]: (state, { payload }) => {
    return [payload, ...state];
  },
  [actions.deleteContact]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
});
const filterReducer = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => {
    return payload;
  },
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export default { store, persistor };
