import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../servises/routes';
import MovieCard from './MovieCard';

const MoviesList = ({ movies }) => {
  return (
    <ul className="movie_container">
      {movies.map(movie => (
        <li key={movie.id} className="movie_container_item">
          <Link to={`${routes.moviesPage}/${movie.id}`}>
            <MovieCard poster_path={movie.poster_path} title={movie.title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
