import React from 'react';
import styles from './contacts.module.scss';
import { connect } from 'react-redux';
import { changeFilter } from '../redux/actions';

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
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
