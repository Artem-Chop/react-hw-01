import React, { Component, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import AppBar from 'UserMenu/AppBar';
// import HomePage from './views/HomeView';
import Phonebook from 'views/PhonebookView';
import Registration from 'views/RegistrationView';
import Login from 'views/LoginView';
import NotFound from './views/NotFound';
import { getUser } from 'redux/auth/operations';
import routes from './servises/routes';
import { connect } from 'react-redux';
import UnauthorizedRoute from './servises/UnauthorizedRoute';
import AuthorizedRoute from 'servises/authorizedRoute';

const HomePage = lazy(() => import('./views/HomeView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetUser();
  }
  render() {
    return (
      <div>
        <AppBar />
        <Suspense fallback={<p>Загружаем</p>}>
          <Routes>
            <Route path={routes.home} element={<HomePage />} />
            <Route element={<UnauthorizedRoute />}>
              <Route path={routes.phonebook} element={<Phonebook />} />
            </Route>
            <Route element={<AuthorizedRoute />}>
              <Route path={routes.registration} element={<Registration />} />
              <Route path={routes.login} element={<Login />} />
            </Route>

            <Route path={routes.notFound} element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetUser: getUser,
};

export default connect(null, mapDispatchToProps)(App);
