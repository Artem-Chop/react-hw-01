import { createSlice } from '@reduxjs/toolkit';
import { registration, login, logout, getUser } from './authOperations';

// Зареганые
// asd@rambler.ru asdfghj
// a@rambler.ru asdfghj
// qwert@rambler.ru
// qwer@rambler.ru
// zxc@rambler.ru

const initialState = {
  user: { name: null, email: null },
  token: null,
  isUserAuthenticated: false,
  error: null,
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(registration.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isUserAuthenticated = true;
      })
      .addCase(registration.rejected, (state, { payload }) => {
        console.log(payload);
        state.error = payload;
      })

      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isUserAuthenticated = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        console.log(payload);
        state.error = payload;
        state.isUserAuthenticated = false;
      })
      .addCase(logout.fulfilled, (state, action) => (state = initialState))
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isUserAuthenticated = true;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        console.log(payload);
        state.error = payload;
        state.isUserAuthenticated = false;
      });
  },
});
// export const { filter } = UserSlice.actions;
export default UserSlice.reducer;
