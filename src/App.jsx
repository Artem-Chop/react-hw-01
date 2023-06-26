import React from 'react';
import { connect } from 'react-redux';
import styles from './phonebook/contacts.module.scss';
import { fetchContacts } from './redux/operations';
import { getIsLoading } from './redux/selectors';
// import { fetchContacts, addContact, deleteContact, filtr } from './redux/slice';

import Form from './phonebook/form';
import ContactList from './phonebook/contactList';
import Filter from './phonebook/Filter';
import { contactsSlice } from './redux/store';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div className={styles.form_container}>
        <Form />

        <div className={styles.contacts_container}>
          <h2>Contacts</h2>
          <Filter />
          {this.props.isLoading && (
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
}
const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
