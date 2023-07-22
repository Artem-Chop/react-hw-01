import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'redux/auth/authSelectors';
import routes from './routes';

export default function UnauthorizedRoute() {
  const isAuthenticated = useSelector(getIsAuth);
  return isAuthenticated ? <Navigate to={routes.phonebook} /> : <Outlet />;
}
