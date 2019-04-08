import React, { Component } from 'react';
// import './App.css';
import Login from './Login'
import {
  Route,
  Link
} from 'react-router-dom';
import { Container, Navbar, NavItem, Nav } from 'react-bootstrap';


class Navigation extends Component {
  render() {
    return (
      <Container>

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/">Home Pharmacy</Link>
          </Navbar.Brand>

<Navbar.Collapse>
          <Nav pullRight>
            <Link to="/signup">
              <NavItem>Signup</NavItem>
            </Link>
            <Link to="/login">
              <NavItem>Login</NavItem>
            </Link>
          </Nav>
        </Navbar.Collapse>

          {/* <Route exact path="/" component={Home} /> */}

          <Route path="/login" component={Login} />
        </Navbar>

      </Container>
    )
  }
}

















export default Navigation;