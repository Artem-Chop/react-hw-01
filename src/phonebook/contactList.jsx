import React from 'react';
import styles from './contacts.module.scss';
import { connect } from 'react-redux';
import { deleteContact } from '../redux/actions';

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

const getVisibleContacts = (allContacts, filter) => {
  const normFiltr = filter.toLocaleLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normFiltr)
  );
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state.contacts, state.filter),
});

const mapDispatchToProps = dispatch => ({
  OnDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
