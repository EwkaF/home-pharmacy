import React, { Component } from 'react';
// import './App.css';
import {
  Route,
  Link
} from 'react-router-dom';
import { AppBar, Typography, Toolbar, Paper } from '@material-ui/core';
import Home from './Home'
import NotFound from './NotFound'
import Signup from './Signup'
import Signin from './Signin'
import UserList from './UserList'
import Redirect from 'react-router-dom/Redirect';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      user: null
    };
  }

  userHasAuthenticated = (user) => {
    this.setState({ isAuthenticated: true,
      user: user
     });
    console.log("działa");

  }


  render() {

    let signOut = <Typography variant="h4" color="inherit" >
      <Link to="/signout">Sign out</Link>
    </Typography>;

    let signIn = <Typography variant="h4" color="inherit" >
      <Link to="/signup">Sign up</Link>
      <Link to="/signin">Signin</Link>
    </Typography>

    let navDisplay = this.state.isAuthenticated ? signOut : signIn;

    let welcome = <div>
      <Typography variant="h4" color="inherit" >Welcome in Home Pharmacy!!!</Typography>
      <Typography variant="h6">It is an application that will help you manage your drug database at home.Create a list of your medicines that you have at home.Every time you are in a pharmacy to buy medicines, eg after a visit to a doctor, check whether this medicine is no longer in your home pharmacy.
          Using the created list you can control the expiration date of your medicines. You can add descriptions to your medicines, for example the dosage that your doctor prescribed.Or you can search your home pharmacy in categories...</Typography>
    </div>

    let main = <Redirect to="/user/:id"></Redirect>

    let mainDisplay = this.state.isAuthenticated ? main : welcome;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" color="inherit" style={{ flex: 1 }} >
              <Link to="/">Home Pharmacy</Link>
            </Typography>
            {navDisplay}
          </Toolbar>
        </AppBar>

        {mainDisplay}

        <Route exact path="/" component={Home} />
        <Route path="/signup" component={() => (<Signup authenticated={this.userHasAuthenticated} />)} />
        {/* zmienić na to: */}
        {/* <Route 
        path="/signin" 
        render={props => <Signin {...props}  authenticated={this.userHasAuthenticated} />} /> */}
        <Route path="/signin" component={() => (<Signin authenticated={this.userHasAuthenticated} />)} />
        <Route path="/user" component={UserList} />
        <Route path="*" component={NotFound} />
      </div>
    )
  }
}
export default Navigation;








