import React from 'react';
import styles from './contacts.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contacts/operations';
import { getVisibleContacts } from '../redux/contacts/selectors';
import { connect } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  if (!contacts) {
    return <div>Не удалось найти контакты</div>;
  }
  return (
    <ul className={styles.contacts_list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contacts_list_item}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            onClick={() => dispatch(deleteContact(id))}
            className={styles.btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
