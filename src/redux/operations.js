import axios from 'axios';

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

axios.defaults.baseURL = 'https://64980bee9543ce0f49e19a17.mockapi.io';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};
export const addContact =
  ({ name, number }) =>
  async dispatch => {
    dispatch(addContactRequest());
    try {
      const { data } = await axios.post('/contacts', { name, number });
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error));
    }
  };

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
