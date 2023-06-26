import React from 'react';
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
        {/* {IsLoading && (
          <div className={styles.spinner_container}>
            <p>Loading...</p>
            <div className={styles.spinner}></div>
          </div>
        )} */}
        <ContactList
          contacts={[
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
