import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './phonebook/contacts.module.scss';

import { getContacts, addContact } from './redux/operations';

import Form from './phonebook/form';
import ContactList from './phonebook/contactList';
import Filter from './phonebook/Filter';

function App() {
  const { IsLoading } = useSelector(state => state.IsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const addUseEffect = useEffect(() => {
    dispatch(addContact());
  }, []);

  return (
    <div className={styles.form_container}>
      <Form add={addUseEffect} />

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
}

export default App;
