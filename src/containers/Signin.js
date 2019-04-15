import React, { Component } from 'react';
import { TextField, Button, Grid, Typography } from '@material-ui/core';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      warnings: ''
    };
  }

  handleChange = name => event => {
    console.log(event.target.value)
    this.setState({
      [name]: event.target.value
     
    });
  };

  validateForm =() => {
    return this.state.name.length > 0 && this.state.password.length > 0;
  }

  handleAuthentication =() => {
    if ( typeof this.props.authenticated === 'function' ){
      this.props.authenticated();
    }
    
  }
  handleFormSubmit = event => {
    event.preventDefault();

    fetch(' http://localhost:3004/users?name=' + this.state.name).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else
        throw new Error('Błąd sieci!');
    }).then(data => {
      console.log(data[0])
      let user = data[0]
      if (user.password === this.state.password) {
        this.handleAuthentication()
        alert("Ok")
      }
      else {
        console.log("Nieprawidłowe hasło")
        this.setState({
          warnings: "Incorrect username or password"
        })
      }
    })
  }


  render() {
    return (


      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >

        <TextField
          id="name"
          name="name"
          type="text"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="password"
          name="password"
          type="password"
          label="Password"
          value={this.state.password}
          onChange={this.handleChange('password')}
          margin="normal"
          variant="outlined"
        />
        <Typography variant="h4" color="inherit" >{this.state.warnings}</Typography>

        <Button variant="contained" color="primary" disabled={!this.validateForm()} onClick={this.handleFormSubmit}>
          Submit
      </Button>

      </Grid>

    );
  }
}

export default Signin;