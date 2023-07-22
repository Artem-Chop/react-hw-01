import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'redux/auth/authSelectors';
import routes from './routes';

export default function AuthorizedRoute() {
  const isAuthenticated = useSelector(getIsAuth);
  return isAuthenticated ? <Outlet /> : <Navigate to={routes.login} />;
}
