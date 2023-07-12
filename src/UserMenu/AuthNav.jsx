import { NavLink } from 'react-router-dom';
import routes from 'servises/routes';
// import styles from '../style';
const AuthNav = () => {
  return (
    <nav className="nav_container">
      <ul>
        <li className="nav_link">
          <NavLink
            to={routes.login}
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
            login
          </NavLink>
        </li>
        <li className="nav_link">
          <NavLink
            to={routes.registration}
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
            register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
