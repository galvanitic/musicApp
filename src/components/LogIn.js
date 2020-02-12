import React, { Component } from 'react';
import NavBar from '../containers/NavBar';
import LoginForm from '../containers/LoginForm';
import Dash from '../containers/Dash';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import '../style/login.css';

class LogIn extends Component {
  state = {
    online: false
  }
  allow = () => {
    this.setState({online: !this.state.online});
  }

  render() {
    return (
      <div>
        <CssBaseline />
        <NavBar />
        {this.state.online ? <Dash /> : <LoginForm />}
        <div className='btnContainer'>
          <Button className="login-btn" variant="contained" color="primary" onClick={this.allow}>
            {this.state.online ? 'Log Out' : 'Log In'}
          </Button>
        </div>
      </div>
    );
  }
}

export default LogIn;