import { NavLink } from 'react-router-dom';
// import styles from '../style';
const AppBar = () => {
  return (
    <nav className="nav_container">
      <ul>
        <li className="nav_link">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
            Home
          </NavLink>
        </li>
        <li className="nav_link">
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppBar;
