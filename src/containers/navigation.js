import React, { Component } from 'react';
// import './App.css';
import Login from './Login'
import {
  Route,
  Link
} from 'react-router-dom';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import Home from './Home'
import NotFound from './NotFound'
import Signup from './Signup'


class Navigation extends Component {
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
              <Link to="/login">login</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </div>
    )
  }
}
export default Navigation;








