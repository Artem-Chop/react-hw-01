import { createSlice } from '@reduxjs/toolkit';
// import { getContacts, addContact, deleteContact } from './operations';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addNewContact: (state, { payload }) => {
      if (state.some(r => r.id === payload.id)) return;
      state.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.filter(contact => contact.id !== payload.id);
    },
  },
});

export const { actions, reducer } = contactsSlice;
