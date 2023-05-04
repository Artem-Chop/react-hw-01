import React from 'react';
import styles from './friends.module.css';
import PropTypes from 'prop-types';
import defaultImage from '../components/lev-v-koroni-vk-beze-380x380.jpg';

const Friend = ({ name, isOnline, avatar }) => {
  return (
    <>
      {isOnline === false && <span className={styles.indicatorOn}></span>}
      {isOnline === true && <span className={styles.indicatorOff}></span>}
      <img src={avatar} alt="User avatar" width="48" className={styles.img} />
      <p className={styles.name}>{name}</p>
    </>
  );
};

Friend.defaultProps = {
  avatar: defaultImage,
};

Friend.propTypes = {
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
};

export default Friend;
