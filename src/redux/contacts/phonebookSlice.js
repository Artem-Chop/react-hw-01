import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: [],
  filter: '',
  IsLoading: false,
};

const phonebookSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, (state, action) => {
        state.IsLoading = true;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.IsLoading = false;

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

        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.IsLoading = false;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.IsLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.IsLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.IsLoading = false;
      });
  },
});
export const { filter } = phonebookSlice.actions;
export default phonebookSlice.reducer;
