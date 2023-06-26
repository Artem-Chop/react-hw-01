import React from 'react';
import styles from './contacts.module.scss';

function Filter() {
  return (
    <label>
      Search
      <input
        type="text"
        value="Find"
        onChange={() => {
          console.log('filtration');
        }}
        className={styles.input_line}
      />
    </label>
  );
}

export default Filter;
