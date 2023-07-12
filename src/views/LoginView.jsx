import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from 'redux/auth/operations';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.login(this.state);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login page</h1>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>
            Login
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Залогиниться</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  login: login,
};
export default connect(null, mapDispatchToProps)(LoginView);
