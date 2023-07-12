import { NavLink } from 'react-router-dom';
import routes from 'servises/routes';
import { connect } from 'react-redux';
import { getIsAuth } from 'redux/auth/auth-selectors';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav className="nav_container">
      <ul>
        <li className="nav_link">
          <NavLink
            to={routes.home}
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated && (
          <li className="nav_link">
            <NavLink
              to={routes.phonebook}
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Phonebook
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuth(state),
});

export default connect(mapStateToProps)(Navigation);
