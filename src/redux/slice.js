import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './operations';

// const BASE_URL = 'https://64980bee9543ce0f49e19a17.mockapi.io';

const initialState = {
  contacts: [],
  filter: '',
  IsLoading: false,
};

const mainSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // fetchContacts: (state, { payload }) => {
    //   console.log(state.contacts);
    //   state.contacts.push(payload);
    // },
    // addContact: (state, { payload }) => {
    //   state.contacts.push(payload);
    // },
    // deleteContact: (state, { payload }) => {
    //   console.log(state.contacts);
    //   state.contacts.filter(contact => {
    //     console.log(contact);
    //     return contact.id !== payload;
    //   });
    // },
    // filtr: (state, { payload }) => {
    //   state.contacts.filter(payload);
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, (state, action) => {
        state.IsLoading = true;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.IsLoading = false;
        console.log(action);
        state.contacts = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.IsLoading = false;
      })
      .addCase(addContact.pending, (state, action) => {
        state.IsLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.IsLoading = false;
        console.log(action);
        return [state.contacts, ...action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.IsLoading = false;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.IsLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.IsLoading = false;
        return state.contacts.filter(contact => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.IsLoading = false;
      });
  },
});

export default mainSlice.reducer;
