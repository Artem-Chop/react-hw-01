import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import AppBar from 'UserMenu/AppBar';

import Phonebook from 'phonebookComponents/PhonebookView';
import Feedbaks from 'feedBacksComponents/FeedBacksView';
import ImageGallery from 'imageFinder/ImageGalleryView';
import Registration from 'generalViews/RegistrationView';
import Login from 'generalViews/LoginView';
import NotFound from './generalViews/NotFound';
import { getUser } from 'redux/auth/authOperations';
import routes from './servises/routes';

import UnauthorizedRoute from './servises/UnauthorizedRoute';
import AuthorizedRoute from 'servises/AuthorizedRoute';
import { Box } from '@chakra-ui/react';

const HomePage = lazy(() => import('./generalViews/HomeView'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Box>
      <AppBar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route element={<AuthorizedRoute />}>
            <Route path={routes.phonebook} element={<Phonebook />} />
            <Route path={routes.feedbacks} element={<Feedbaks />} />
            <Route path={routes.gallary} element={<ImageGallery />} />
          </Route>
          <Route element={<UnauthorizedRoute />}>
            <Route path={routes.registration} element={<Registration />} />
            <Route path={routes.login} element={<Login />} />
          </Route>

          <Route path={routes.notFound} element={<NotFound />} />
        </Routes>
      </Suspense>
    </Box>
  );
}
