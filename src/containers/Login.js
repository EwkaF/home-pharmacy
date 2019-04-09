import React, { Component } from 'react';
import { TextField, Button} from '@material-ui/core';

class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: "",
        password: ""
      };
    }
  
    handleChange = name => event => {
      console.log(event.target.value)
      this.setState({
        [name]: event.target.value,
      });
    };
  
    validateForm() {
      return this.state.name.length > 0 && this.state.password.length > 0;
    }
  
    // handleChange = event => {
    //   this.setState({
    //     [event.target.id]: event.target.value
    //   });
    // }
  
    // handleSubmit = event => {
    //   event.preventDefault();
    // }
  
    render() {
      return (
        // <div className="Login">
        //   <form onSubmit={this.handleSubmit}>
        //     <FormGroup controlId="email" >
        //       <FormLabel>Email</FormLabel>
        //       <FormControl
        //         autoFocus
        //         type="email"
        //         value={this.state.email}
        //         onChange={this.handleChange}
        //       />
        //     </FormGroup>
        //     <FormGroup controlId="password">
        //       <FormLabel>Password</FormLabel>
        //       <FormControl
        //         value={this.state.password}
        //         onChange={this.handleChange}
        //         type="password"
        //       />
        //     </FormGroup>
        //     <Button
        //     variant="primary"
        //       block
              
        //       disabled={!this.validateForm()}
        //       type="submit"
        //     >
        //       Login
        //     </Button>
        //   </form>
        // </div>

       
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

         <Button variant="contained" color="primary" disabled={!this.validateForm()} >
        Submit
      </Button>
        </div>
       
      );
    }
  }

export default Login;