import React from 'react';
import Friend from './friend';

import styles from './friends.module.css';

const Friends = ({ friends }) => {
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {friends.map(friend => (
          <li key={friend.id} className={styles.item}>
            <Friend
              name={friend.name}
              isOnline={friend.isOnline}
              avatar={friend.avatar}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Friends;
