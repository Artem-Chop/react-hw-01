import React from 'react';
import AppBar from 'views/AppBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import Cast from './views/Cast';
import Reviews from './views/Reviews';
import NotFound from './views/NotFound';
import routes from 'servises/routes';
import styles from './styles/shared.scss';

const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.moviesPage} element={<MoviesPage />} />
        <Route path={routes.movieDetailsPage} element={<MovieDetailsPage />}>
          <Route path={routes.cast} element={<Cast />} />
          <Route path={routes.reviews} element={<Reviews />} />
        </Route>
        <Route path={routes.notFound} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
