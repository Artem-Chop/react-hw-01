import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCards = createAsyncThunk(
  'gallary/getCards',
  ({ searchQuery, page = 1 }) => {
    return fetch(
      `https://pixabay.com/api/?key=35794708-7d8659be85af9da4d1b3626ea&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=20`
    )
      .then(response => response.json())
      .then(data => {
        // console.log(data.hits);
        return data.hits;
      })
      .catch(err => {
        console.log(err);
      });
  }
);
