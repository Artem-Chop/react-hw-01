import React from 'react';
import styles from './contacts.module.scss';
import { connect } from 'react-redux';
import { deleteContact } from '../redux/operations';
import { getVisibleContacts } from '../redux/selectors';

// import {
//   fetchContacts,
//   addContact,
//   deleteContact,
//   filtr,
// } from '../redux/slice';

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
const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  OnDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
