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
  const statsView = [
    { label: 'Followers', data: followers },
    { label: 'Views', data: views },
    { label: 'Likes', data: likes },
  ];
  return (
    <div className={styles.userCard}>
      <div className={styles.main__info}>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.stats__list}>
        {statsView.map(content => (
          <li className={styles.stats__list__item} key={content.label}>
            <span>{content.label}</span>
            <span>{content.data}</span>
          </li>
        ))}
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
