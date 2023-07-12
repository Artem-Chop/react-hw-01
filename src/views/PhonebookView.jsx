import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../phonebook/contacts.module.scss';

import { getContacts } from '../redux/contacts/operations';

import Form from '../phonebook/form';
import ContactList from '../phonebook/contactList';
import Filter from '../phonebook/filter';

const PhonebookView = () => {
  const IsLoading = useSelector(state => state.contactReducer.IsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={styles.form_container}>
      <Form />

      <div className={styles.contacts_container}>
        <h2>Contacts</h2>
        <Filter />
        {IsLoading && (
          <div className={styles.spinner_container}>
            <p>Loading...</p>
            <div className={styles.spinner}></div>
          </div>
        )}
        <ContactList />
      </div>
    </div>
  );
};

export default PhonebookView;
