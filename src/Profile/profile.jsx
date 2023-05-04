import React from 'react';
import styles from './profile.module.css';
import defaultImage from '../components/lev-v-koroni-vk-beze-380x380.jpg';
import PropTypes from 'prop-types';

const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.userCard}>
      <div className={styles.main__info}>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.stats__list}>
        <li className={styles.stats__list__item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={styles.stats__list__item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={styles.stats__list__item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultImage,
  stats: {},
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
