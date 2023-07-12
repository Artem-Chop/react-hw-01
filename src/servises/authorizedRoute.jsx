import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuth } from 'redux/auth/auth-selectors';
import routes from './routes';

const AuthorizedRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Navigate to={routes.phonebook} /> : <Outlet />;
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuth(state),
});

export default connect(mapStateToProps)(AuthorizedRoute);
