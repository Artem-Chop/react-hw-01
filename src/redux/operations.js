// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://64980bee9543ce0f49e19a17.mockapi.io/contacts';

export const getContacts = createAsyncThunk('contacts/getContacts', () => {
  return fetch(BASE_URL)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .catch(console.error());
});

export const addContact = createAsyncThunk('contacts/addContact', data => {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    // Send your data in the request body as JSON
    body: JSON.stringify(data),
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then(task => {
      // do something with the new task
    })
    .catch(console.error());
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', id => {
  return fetch(`BASE_URL/${id}`, {
    method: 'DELETE',
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then(task => {
      // Do something with deleted task
    })
    .catch(console.error());
});

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async () => {
//     const response = await axios.get('/contacts');
//     console.log(response.data);

//     return response.data;
//   }
// );

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());
//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }
// };
// export const addContact =
//   ({ name, number }) =>
//   async dispatch => {
//     dispatch(addContactRequest());
//     try {
//       const { data } = await axios.post('/contacts', { name, number });
//       dispatch(addContactSuccess(data));
//     } catch (error) {
//       dispatch(addContactError(error));
//     }
//   };

// export const deleteContact = id => async dispatch => {
//   dispatch(deleteContactRequest());
//   try {
//     await axios.delete(`/contacts/${id}`);
//     dispatch(deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(deleteContactError(error));
//   }
// };
