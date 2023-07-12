import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk(
  'user/registerUser',
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', info);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', info);
      token.set(data.token);
      return data;
    } catch (error) {
      // throw new Error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, { getState, rejectWithValue }) => {
    const {
      userReducer: { token: persistToken },
    } = getState();

    try {
      if (persistToken) {
        token.set(persistToken);
      }
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
