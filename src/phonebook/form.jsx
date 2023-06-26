import React from 'react';
import styles from './contacts.module.scss';

function Form() {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log('new contact added');
      }}
      className={styles.inputs}
    >
      <label>
        Name
        <input
          className={styles.input_line}
          type="text"
          name="name"
          value="Boris"
          onChange={() => {
            console.log('name change');
          }}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          className={styles.input_line}
          type="tel"
          name="number"
          value="+380-000-00-00"
          onChange={() => {
            console.log('number change');
          }}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={styles.btn}>
        Add new contact
      </button>
    </form>
  );
}

export default Form;
