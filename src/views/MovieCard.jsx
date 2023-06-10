import React from 'react';
import defaultPoster from '../img/noposter.png';
const MovieCard = ({ poster_path, title }) => {
  return (
    <>
      {poster_path ? (
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
      ) : (
        <img src={defaultPoster} alt="" />
      )}
      {title}
    </>
  );
};

export default MovieCard;
