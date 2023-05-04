import React from 'react';
import PropTypes from 'prop-types';

const Transaction = ({ type, amount, currency }) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
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
