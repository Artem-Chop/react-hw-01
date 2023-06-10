import { Component } from 'react';
import MoviesList from './MoviesList';
import { fetchTrending } from 'servises/servises';

class HomePage extends Component {
  state = { movies: [] };

  componentDidMount() {
    fetchTrending()
      .then(response => this.setState({ movies: response.data.results }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        <h1 className="page_tittle">Trending Today List:</h1>
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}

export default HomePage;
