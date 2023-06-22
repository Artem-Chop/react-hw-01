import React from 'react';
import { connect } from 'react-redux';
import styles from './phonebook/contacts.module.scss';

import Form from './phonebook/form';
import ContactList from './phonebook/contactList';
import Filter from './phonebook/Filter';

function App() {
  return (
    <div className={styles.form_container}>
      <Form />

      <div className={styles.contacts_container}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
