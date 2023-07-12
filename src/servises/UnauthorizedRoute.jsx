import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuth } from 'redux/auth/auth-selectors';
import routes from './routes';

const UnauthorizedRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={routes.login} />;
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuth(state),
});

export default connect(mapStateToProps)(UnauthorizedRoute);
