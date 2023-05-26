import React from 'react';
import styles from './otzivi.module.scss';

const Statistics = ({
  goodInf,
  badInf,
  neutralInf,
  totalInf,
  percentInf,
  vision,
}) => (
  <ul className={styles.stat_list}>
    <li className={styles.stat_list_item}>
      Good: <span>{goodInf}</span>
    </li>
    <li className={styles.stat_list_item}>
      Neutral: <span>{neutralInf}</span>
    </li>
    <li>
      Bad: <span>{badInf}</span>
    </li>
    <li className={styles.stat_list_item}>
      Total: <span>{totalInf}</span>
    </li>
    <li className={styles.stat_list_item}>
      Good Percentage: <span>{percentInf}%</span>
    </li>
  </ul>
);

export default Statistics;
