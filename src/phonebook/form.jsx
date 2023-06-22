import React from 'react';
import styles from './contacts.module.scss';
import { connect } from 'react-redux';
import { addContact } from '../redux/actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      number: '',
    };
  }
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    // this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.OnSubmit({ name, number });
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.inputs}>
        <label>
          Name
          <input
            className={styles.input_line}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
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
            value={this.state.number}
            onChange={this.handleChange}
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
}

// const mapStateToProps = state => {};
const mapDispatchToProps = dispatch => ({
  OnSubmit: contact => dispatch(addContact(contact)),
});

export default connect(null, mapDispatchToProps)(Form);
