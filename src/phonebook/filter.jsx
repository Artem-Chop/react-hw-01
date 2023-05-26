import React from 'react';
import styles from './contacts.module.scss';

const Filter = ({ value, onChange }) => (
  <label>
    Search
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.input_line}
    />
  </label>
);

export default Filter;
