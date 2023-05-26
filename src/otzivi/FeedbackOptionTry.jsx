import React from 'react';
import styles from './otzivi.module.scss';

const FeedBacksTry = ({ options, allClick }) => (
  <ul className={styles.btn_list}>
    {options.map(option => (
      <li key={option}>
        <button
          type="button"
          name={option}
          onClick={allClick}
          className={styles.btn}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedBacksTry;
