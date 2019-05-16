import React, { Component } from 'react'
import { TextField, FormControl, InputLabel, Select, Input, MenuItem, Grid, Button, Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
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
            expDate: new Date(),
            description: "",
            category: [],
            warnings: ''
        };
    }

    componentDidMount() {
        if (this.props.item !== undefined) {
            this.setState({
                name: this.props.item.name,
                expDate: this.props.item.dateOfExp,
                description: this.props.item.description,

            })
        }
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

    handleDateChange = date => {
        this.setState({ expDate: date });
    };

    handleSubmit = (e) => {
        console.log("Jest ok")
        var newItems = {
            userId: this.props.user,
            name: this.state.name,
            // dateOfExp: this.state.expDate,
            dateOfExp: this.state.expDate !== "object" ? this.state.expDate : this.state.expDate.getMonth() + "/" + this.state.expDate.getFullYear(),
            description: this.state.description,
            // category: this.state.category
        }

        e.preventDefault();
        // TODO: validate
        this.props.onSubmit(newItems)
        // this.props.onSelectEdit()
    }

    handleSubmitChanges = (e) => {
        console.log(this.props.editMode)
        var newItems = {
            userId: this.props.user,
            name: this.state.name,
            // dateOfExp: this.state.expDate,
            dateOfExp: this.state.expDate !== "object" ? this.state.expDate : this.state.expDate.getMonth() + "/" + this.state.expDate.getFullYear(),
            description: this.state.description,
            // category: this.state.category
            id: this.props.item.id
        }

        e.preventDefault();
        // TODO: validate
        this.props.onSubmitChanges(newItems)
        // this.props.onSelectEdit()
    }



    render() {

        let button;
        if (this.props.editMode === false) {
            button = <Button
                color="primary"
                onClick={this.handleSubmit}
            >
                {this.props.button}
            </Button>
        }
        else {
            button = <Button
                color="primary"
                onClick={this.handleSubmitChanges}
            >
                {this.props.button}
            </Button>
        }


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

                <MuiPickersUtilsProvider utils={DateFnsUtils}>

                    {/* <DatePicker
                        margin="normal"
                        label="Experation date"
                        value={this.state.expDate}
                        onChange={this.handleDateChange}

                    /> */}

                    <DatePicker
                        variant="outlined"
                        openTo="year"
                        views={["year", "month"]}
                        label="Year and Month"
                        helperText="Start from year selection"
                        value={this.state.expDate}
                        onChange={this.handleDateChange}
                    />
                </MuiPickersUtilsProvider>
                {button}

                {/* <Button
                    color="primary"
                    onClick={this.handleSubmit}
                > */}
                {/* {!this.props.editMode
                    ? <Button
                        color="primary"
                        onClick={this.handleSubmit}
                    >
                        {this.props.button}
                       
                    </Button>

                    : <Button
                        color="primary"
                        onClick = {this.handleSubmitChanges}
                    >
                        {this.props.button}
                    </Button>
                } */}
            </Grid>
        )
    }
}

export default Form
