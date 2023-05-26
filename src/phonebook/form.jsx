import React from 'react';
import styles from './contacts.module.scss';

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
    const Name = this.state.name;
    const Number = this.state.number;
    const info = { Name, Number };
    this.props.OnSubmit(info);
    console.log(this.state);
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

export default Form;