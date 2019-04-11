import React, { Component } from 'react';
import { TextField, Button, Grid} from '@material-ui/core';

class Signup extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: "",
        password: "",
        confirmPassword: ""
      };
    }
  
    handleChange = name => event => {
      console.log(event.target.value)
      this.setState({
        [name]: event.target.value,
      });
    };
  
    validateForm() {
      return this.state.name.length > 0 && this.state.password.length > 0 && this.state.confirmPassword.length > 0 && this.state.password === this.state.confirmPassword;
    }

    handleFormSubmit = event => {
      event.preventDefault();
      var user ={
        name: this.state.name,
        password: this.state.password
      }
      
  
      fetch(' http://localhost:3004/users',{
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        }).then(response => {
          response.json().then(data =>{
            console.log("Successful" + data);
          })
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

           <TextField
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="confirmPassword"
          value={this.state.confirmPassword}
          onChange={this.handleChange('confirmPassword')}
          margin="normal"
          variant="outlined"
        />

         <Button variant="contained" color="primary" disabled={!this.validateForm()} onClick={this.handleFormSubmit} >
        Submit
      </Button>
        
       </Grid>
      );
    }
  }

export default Signup;