import React from 'react';
import PropTypes from 'prop-types';
import styles from './transaction.module.css';

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={styles.item}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

// Transaction.defaultProps = {
//   notNeededHere: nothing,
// };

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default Transaction;
