import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { connect } from 'react-redux';
import { getIsAuth } from 'redux/auth/auth-selectors';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className="menu">
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuth(state),
});

export default connect(mapStateToProps)(AppBar);
