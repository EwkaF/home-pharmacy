import React, { Component } from 'react';
// import './App.css';
import Navigation from './containers/navigation.js';
import {
  BrowserRouter as Router,
 
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />

      </Router>
    );
  }
}

export default App;
