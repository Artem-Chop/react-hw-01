import React, { Component } from 'react';
import { fetchCast } from '../servises/servises';
import { withRouter } from '../servises/withRouter';
import defaultPoster from '../img/kot_ochki_4754.jpg';

class Cast extends Component {
  state = { actors: null };

  componentDidMount() {
    fetchCast(this.props.router.params.movieId)
      .then(data =>
        data.cast.length > 0 ? this.setState({ actors: data.cast }) : null
      )
      .catch(error => console.log(error));
  }
  render() {
    const { actors } = this.state;
    if (!actors) {
      return <div className="noInfo">No information</div>;
    }
    return (
      <div>
        <h1>Cast</h1>
        <ul className="cast_container">
          {actors.map(actor => (
            <li key={actor.id}>
              {!actor.profile_path && <img src={defaultPoster} alt="" />}

              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                  alt=""
                />
              )}
              <h2>{actor.name}</h2>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(Cast);
