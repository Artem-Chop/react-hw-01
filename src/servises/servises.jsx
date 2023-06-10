import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: 'c8971b346877ee4bba0d277ad44911fe' },
});

export const fetchTrending = async () => {
  try {
    const response = await axiosInstance.get(`/trending/movie/day`);
    return response;
  } catch (error) {
    console.log('Error in fetchTrending');
  }
};

export const searchMovies = async (query, page) => {
  try {
    const response = await axiosInstance.get(`/search/movie`, {
      params: { query, page },
    });
    return response;
  } catch (error) {
    console.log('Error in searchMovies');
  }
};

export const fetchCast = async movieId => {
  try {
    const { data } = await axiosInstance.get(`/movie/${movieId}/credits`);
    return data;
  } catch (error) {
    console.log('Error in fetchCast');
  }
};

export const fetchReviews = async movieId => {
  try {
    const { data } = await axiosInstance.get(`/movie/${movieId}/reviews`);
    return data;
  } catch (error) {
    console.log('Error in fetchReviews');
  }
};
export const fetchDetails = async movieId => {
  try {
    const { data } = await axiosInstance.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.log('Error in fetchDetails');
  }
};
