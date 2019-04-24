import React, { Component } from 'react'
import { TextField, FormControl, InputLabel, Select, Input,MenuItem, Grid, Typography } from '@material-ui/core';
import category from '../category'

const style = {
    Input: {
        margin: 10,
        width: 300
    }
}
export class Form extends Component {
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
        console.log(event.target.value)
        this.setState({ category: event.target.value });
    };


    handleClick = (e) => {
        e.preventDefault();
        var newItem = {
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
                direction="column"
                justify="center"
                alignItems="center"
            >
                <TextField
                    style={style.Input}
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
                    style={style.Input}
                    id="expDate"
                    name="expDate"
                    type="expDate"
                    label="expiration date"
                    value={this.state.expDate}
                    onChange={this.handleChange('expDate')}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    style={style.Input}
                    id="description"
                    name="description"
                    label="description"
                    multiline
                    rows="4"
                    value={this.state.description}
                    onChange={this.handleChange('description')}
                    margin="normal"
                    variant="outlined"
                />

                <FormControl >
                    <InputLabel htmlFor="category">Category</InputLabel>
                    <Select
                        style={style.Input}
                        multiple
                        name="category"
                        value={this.state.category}
                        onChange={this.handleSelectChange}
                        input={<Input id="select-multiple" />}
                    >
                        {category.map(name => (
                            <MenuItem key={name} value={name}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* <Button variant="contained"  color="primary" onClick={this.handleClick}>
        Submit
      </Button> */}
            </Grid>
        )
    }
}

export default Form
