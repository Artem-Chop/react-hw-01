import React from 'react';
import styles from './contacts.module.scss';
import { connect } from 'react-redux';
import { deleteContact } from '../redux/operations';
import { getVisibleContacts } from '../redux/selectors';

function ContactList({ contacts }) {
  return (
    <ul className={styles.contacts_list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contacts_list_item}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            onClick={() => {
              console.log('delete contact');
            }}
            className={styles.btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
