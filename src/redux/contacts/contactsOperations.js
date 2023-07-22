import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      console.log('Error');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async NewData => {
    try {
      const { data } = await axios.post('/contacts', NewData);
      return data;
    } catch (error) {
      console.log('Error');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      console.log('Error');
    }
  }
);
