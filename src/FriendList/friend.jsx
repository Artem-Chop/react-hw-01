import React from 'react';
import styles from './friends.module.css';
import PropTypes from 'prop-types';
import defaultImage from '../components/lev-v-koroni-vk-beze-380x380.jpg';

const Friend = ({ name, isOnline, avatar }) => {
  return (
    <li className={styles.item}>
      {isOnline === false && <span className={styles.indicatorOn} />}
      {isOnline === true && <span className={styles.indicatorOff} />}
      <img src={avatar} alt="User avatar" width="48" className={styles.img} />
      <p className={styles.name}>{name}</p>
    </li>
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
