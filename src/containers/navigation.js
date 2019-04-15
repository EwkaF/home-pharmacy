import React, { Component } from 'react';
// import './App.css';
import {
  Route,
  Link
} from 'react-router-dom';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import Home from './Home'
import NotFound from './NotFound'
import Signup from './Signup'
import Signin from './Signin'

class Navigation extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
    };
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }


  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" color="inherit" style={{ flex: 1 }} >
              <Link to="/">Home Pharmacy</Link>
            </Typography>
            <Typography variant="h4" color="inherit" >
              <Link to="/signup">Sign up</Link>
              <Link to="/signin">Signin</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="*" component={NotFound} />
      </div>
    )
  }
}
export default Navigation;








