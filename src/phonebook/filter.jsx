import React from 'react';
import styles from './contacts.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from '../redux/contacts/selectors';
import { filter } from 'redux/contacts/phonebookSlice';

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);
  return (
    <label>
      Search
      <input
        type="text"
        value={value}
        onChange={e => {
          dispatch(filter(e.currentTarget.value));
        }}
        className={styles.input_line}
      />
    </label>
  );
}

export default Filter;
