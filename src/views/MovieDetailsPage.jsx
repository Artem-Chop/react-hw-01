import { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { fetchDetails } from '../servises/servises';
import { withRouter } from '../servises/withRouter';
import defaultPoster from '../img/noposter.png';
// import styles from '../styles/shared.scss';

class Page extends Component {
  state = { film: null };

  async componentDidMount() {
    fetchDetails(this.props.router.params.movieId).then(data =>
      this.setState({ film: data })
    );
  }

  render() {
    const { film } = this.state;
    if (!film) {
      return null;
    }
    return (
      <>
        <button
          type="button"
          onClick={() => {
            this.props.router.navigate(-1);
          }}
        >
          Back
        </button>
        <h1 className="page_tittle">{film.title}</h1>
        <div className="one_movie_container">
          {!film.poster_path && <img src={defaultPoster} alt="" />}
          {film.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
              alt=""
            />
          )}
          <div className="info-container">
            <h2>{film.tagline}</h2>
            <h3 className="sub_tittle">Vote average: {film.vote_average}/10</h3>
            <h3 className="sub_tittle">
              Overview: <br />
            </h3>
            <p>{film.overview}</p>
            <h3 className="sub_tittle">Genres</h3>
            <ul>
              {film.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <ul>
          <li>
            <NavLink
              to={`cast`}
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`reviews`}
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </>
    );
  }
}

export default withRouter(Page);
