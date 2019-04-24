import React, { Component } from 'react'
import { TextField, Button, FormControl, InputLabel, Select, Input, MenuProps, MenuItem, Grid, Typography } from '@material-ui/core';
import category from '../category'

export class AddNewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      category: [],
      warnings: ''
    };
  }
  handleChange = name => event => {
    console.log(event.target.value)
    this.setState({
      [name]: event.target.value
    });
  };

  handleSelectChange = event => {
    console.log(event.target.value )
    this.setState({ category: event.target.value });
  };

  // handleChangeMultiple = event => {
  //   const { options } = event.target;
  //   const value = [];
  //   for (let i = 0, l = options.length; i < l; i += 1) {
  //     if (options[i].selected) {
  //       value.push(options[i].value);
  //     }
  //   }
  //   this.setState({
  //     category: value,
  //   });
  // };

  handleClick =(e) =>{
    e.preventDefault();
    var newItem ={
      name: this.state.name,
      expDate: this.state.expDate,
      description: this.state.description,
      category: this.state.category
    }
  }


  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <TextField
          id="name"
          name="name"
          type="text"
          label="Name"
          value={this.state.name}
          //   onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="expDate"
          name="expDate"
          type="expDate"
          label="expiration date"
          value={this.state.name}
          //   onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="description"
          name="description"
          label="description"
          multiline
          rows="4"
          // defaultValue="Default Value"
          // className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <FormControl >
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select
            multiple
            name="category"
            value={this.state.category}
            onChange={this.handleSelectChange}
            input={<Input id="select-multiple" />}
          // MenuProps={MenuProps}
          >
            {category.map(name => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

         <Button variant="contained"  color="primary" onClick={this.handleClick}>
        Submit
      </Button>
      </Grid>
    )
  }
}

export default AddNewItem
