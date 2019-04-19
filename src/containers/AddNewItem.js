import React, { Component } from 'react'
import { TextField, Button, Grid, Typography } from '@material-ui/core';
import category from '../category'

export class AddNewItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            warnings: ''
        };
    }
    render() {
        return (
            <Grid
                container
                direction="row"
                justify="space-around"
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
                    label="description"
                    multiline
                    rows="4"
                    // defaultValue="Default Value"
                    // className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="category"
                    select
                    label="category"
                    // className={classes.textField}
                    value={this.state.name}
                    // onChange={this.handleChange('currency')}
                    // SelectProps={{
                    //     native: true,
                    //     MenuProps: {
                    //         className: classes.menu,
                    //     },
                    // }}

                    margin="normal"
                    variant="outlined"
                >
                    {category.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </TextField>

            </Grid>
        )
    }
}

export default AddNewItem
