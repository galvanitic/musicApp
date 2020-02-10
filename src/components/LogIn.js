import React, { Component } from 'react';
import NavBar from '../containers/NavBar';
import LoginForm from '../containers/LoginForm';
import Dash from '../containers/Dash';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../style/login.css';

class LogIn extends Component {
  state = {
    authorized: false
  }
  allow = () => {
    this.setState({authorized: !this.state.authorized});
  }

  render() {
    return (
      <div>
        <CssBaseline />
        <NavBar />
        {this.state.authorized ? <Dash /> : <LoginForm allow={this.allow} />}
      </div>
    );
  }
}

export default LogIn;