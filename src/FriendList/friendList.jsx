import React from 'react';
import Friend from './friend';

import styles from './friends.module.css';

const Friends = ({ friends }) => {
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {friends.map(friend => (
          <Friend
            key={friend.id}
            name={friend.name}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
          />
        ))}
      </ul>
    </section>
  );
};

export default Friends;
