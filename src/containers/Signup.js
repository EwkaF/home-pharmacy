import React, { Component } from 'react';
import { TextField, Button} from '@material-ui/core';

class Signup extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: "",
        password: "",
        passwordReapeated: ""
      };
    }
  
    handleChange = name => event => {
      console.log(event.target.value)
      this.setState({
        [name]: event.target.value,
      });
    };
  
    validateForm() {
      return this.state.name.length > 0 && this.state.password.length > 0 && this.state.passwordReapeated.length > 0;
    }

  
    render() {
      return (
        <div>
      
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
          id="passwordRepeated"
          name="passwordReapeated"
          type="password"
          label="Repeat password"
          value={this.state.passwordReapeated}
          onChange={this.handleChange('passwordReapeated')}
          margin="normal"
          variant="outlined"
        />

         <Button variant="contained" color="primary" disabled={!this.validateForm()} >
        Submit
      </Button>
        </div>
       
      );
    }
  }

export default Signup;