import React, { Component } from 'react'
import { TextField, FormControl, InputLabel, Select, Input, MenuItem, Grid, Button, Typography } from '@material-ui/core';
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
            expDate: "",
            description: "",
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

    handleSubmit = (e) =>{
        var newItems = {
            userId: this.props.user,
            name: this.state.name,
            dateOfExp: this.state.expDate,
            description: this.state.description,
            // category: this.state.category
        }
        e.preventDefault();
          // TODO: validate
          this.props.onSubmit(newItems)
    }

    handleClick = (e) => {
        e.preventDefault();
        var newItem = {
            userId: this.props.user,
            name: this.state.name,
            expDate: this.state.expDate,
            description: this.state.description,
            category: this.state.category
        }

        fetch(' http://localhost:3004/users/' + this.props.user + '/medicinesList', {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);

            })
        })
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
                    type="text"
                    label="expDate"
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

                 <Button
        color="primary"
        // variant="raised"
        onClick={this.handleSubmit}
      >
        Add
      </Button>
            </Grid>
        )
    }
}

export default Form
