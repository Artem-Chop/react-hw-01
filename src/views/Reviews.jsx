import React, { Component } from 'react';
import { fetchReviews } from '../servises/servises';
import { withRouter } from '../servises/withRouter';

class Reviews extends Component {
  state = { reviews: null };

  componentDidMount() {
    fetchReviews(this.props.router.params.movieId)
      .then(data =>
        data.results.length > 0
          ? this.setState({ reviews: data.results })
          : null
      )
      .catch(error => console.log(error));
  }

  render() {
    const { reviews } = this.state;
    if (!reviews) {
      return <div className="noInfo">No reviews yet</div>;
    }

    return (
      <div>
        <h1>Reviews</h1>
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(Reviews);
