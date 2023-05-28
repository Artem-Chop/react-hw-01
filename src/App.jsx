import React from 'react';
import Form from './phonebook/form';
import ContactList from './phonebook/contactList';
import { nanoid } from 'nanoid';
import Filter from './phonebook/filter';
import styles from './phonebook/contacts.module.scss';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount(prevProps, prevState) {
    console.log('mount');
    const contacts = localStorage.getItem('contactList');
    console.log(contacts);
    const parcedContacts = JSON.parse(contacts);

    this.setState({ contacts: parcedContacts });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('upd');

    console.log(prevState);
    console.log(this.state);

    if (this.state.contacts !== prevState.contacts) {
      console.log('вот оно');
      localStorage.setItem('contactList', JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  addContact = ({ Name, Number }) => {
    const contact = { id: nanoid(), name: Name, number: Number };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    const normFiltr = this.state.filter.toLocaleLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normFiltr)
    );
    return (
      <div className={styles.form_container}>
        <Form OnSubmit={this.addContact} number={this.contacts} />

        <div className={styles.contacts_container}>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            OnDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
