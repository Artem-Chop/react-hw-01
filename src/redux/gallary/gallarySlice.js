import { createSlice } from '@reduxjs/toolkit';
import { getCards } from './gallaryOperations';

const initialState = {
  searchQuery: '',
  cards: [],
  page: 1,
  IsLoading: false,
};

const gallarySlice = createSlice({
  name: 'gallary',
  initialState,
  reducers: {
    clear: state => {
      state.cards = [];
    },
    pageIncrement: state => {
      state.page = state.page + 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCards.pending, (state, action) => {
        state.IsLoading = true;
      })
      .addCase(getCards.fulfilled, (state, { payload }) => {
        state.IsLoading = false;

        state.cards = [...state.cards, ...payload];
      })
      .addCase(getCards.rejected, (state, action) => {
        state.IsLoading = false;
      });
  },
});
export default gallarySlice.reducer;
export const { clear, pageIncrement } = gallarySlice.actions;

// export const setPage = page => ({ type: 'setPage', payload });
