// import render  from '@testing-library/react';
import React from 'react';
import Statistics from './statistics ';
// import FeedBacks from './feedbackOptions';
import styles from './otzivi.module.scss';
import FeedBacksTry from './FeedbackOptionTry';

class Feedbaks extends React.Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  launchClickButton = ({ target: { name } }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalCount = good + neutral + bad;
    const percentage = ((good / totalCount) * 100).toFixed(0);
    return (
      <div className={styles.feedback_container}>
        <div className={styles.feedback_request_container}>
          <h1 className={styles.request}>Please leave feedback</h1>
          {/* <FeedBacks
            goodClick={this.goodClickIncrement}
            neutralClick={this.neutralClickIncrement}
            badClick={this.badClickIncrement}
          /> */}

          <FeedBacksTry
            options={Object.keys(this.state)}
            allClick={this.launchClickButton}
          />
        </div>
        Statistics
        {totalCount > 0 ? (
          <Statistics
            goodInf={good}
            neutralInf={neutral}
            badInf={bad}
            totalInf={totalCount}
            percentInf={percentage}
            vision={this.state.visible}
          />
        ) : (
          <div>There is no feedback</div>
        )}
      </div>
    );
  }
}

export default Feedbaks;
