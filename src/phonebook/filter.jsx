import React from 'react';
import styles from './contacts.module.scss';
import { connect } from 'react-redux';
import { changeFilter } from '../redux/actions';
// import {
//   fetchContacts,
//   addContact,
//   deleteContact,
//   filtr,
// } from '../redux/slice';

import { getFilterValue } from '../redux/selectors';

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

const mapStateToProps = state => ({
  value: getFilterValue(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
