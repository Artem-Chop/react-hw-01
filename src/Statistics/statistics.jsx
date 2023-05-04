import React from 'react';
import styles from './statics.module.css';

import PropTypes from 'prop-types';

const Statistics = ({ stats, title }) => {
  return (
    <section className={styles.statistic__container}>
      {title.trim() !== false && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.stat__list}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={styles.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.any.isRequired,
};

function randomColor() {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
}

export default Statistics;
