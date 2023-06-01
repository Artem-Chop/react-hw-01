import React from 'react';
import styles from './styles.module.css';

class Searchbar extends React.Component {
  state = {
    query: '',
  };
  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.Form} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.Button}>
            <span className="button-label">Search</span>
          </button>

          <input
            value={this.state.query}
            className={styles.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
