import React from 'react';
import styles from './contacts.module.scss';

const ContactList = ({ contacts, OnDeleteContact }) => (
  <ul className={styles.contacts_list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.contacts_list_item}>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={() => OnDeleteContact(id)} className={styles.btn}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
