import React from 'react';
import styles from './styles.module.css';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={styles.spiner}>
      <RotatingLines
        strokeColor="#576bf3"
        strokeWidth="5"
        animationDuration="0.75"
        width="60"
        visible={true}
      />
    </div>
  );
};
export default Loader;
