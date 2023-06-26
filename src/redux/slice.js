import {
  createAction,
  configureStore,
  combineReducers,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  IsLoading: false,
};

const mainSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchContacts: (state, { payload }) => {
      console.log(state.contacts);
      state.contacts.push(payload);
    },
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      console.log(state.contacts);
      state.contacts.filter(contact => {
        console.log(contact);
        return contact.id !== payload;
      });
    },
    filtr: (state, { payload }) => {
      state.contacts.filter(payload);
    },
  },
});

export default mainSlice.reducer;
export const { fetchContacts, addContact, deleteContact, filtr } =
  mainSlice.actions;
