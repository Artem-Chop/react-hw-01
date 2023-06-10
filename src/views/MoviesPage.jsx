import { Component } from 'react';
import MoviesList from './MoviesList';
import { withRouter } from '../servises/withRouter';
import { searchMovies } from 'servises/servises';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
    page: 1,
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };
  handleSubmit = async event => {
    const { query, page } = this.state;
    event.preventDefault();
    searchMovies(query, page)
      .then(response => this.setState({ movies: response.data.results }))
      .catch(error => console.log(error));
  };

  render() {
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
        <h1>Find your movie</h1>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            onChange={this.handleChange}
          />
        </form>
        {this.state.movies.length > 0 && (
          <MoviesList movies={this.state.movies} />
        )}
      </>
    );
  }
}

export default withRouter(MoviesPage);
