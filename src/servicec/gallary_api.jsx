import axios from 'axios';

const fetchImages = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=35794708-7d8659be85af9da4d1b3626ea&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => response.data.hits);
};
export default { fetchImages };
