import React from 'react';
import Transaction from './transaction';
import styles from './transaction.module.css';

const TransactionHistory = ({ operations }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headers}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {operations.map(operation => (
          <tr key={operation.id} className={styles.item}>
            <Transaction
              type={operation.type}
              amount={operation.amount}
              currency={operation.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
    //
  );
};
export default TransactionHistory;
