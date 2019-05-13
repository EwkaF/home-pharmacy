import React, { Component } from 'react'
import { Grid, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import Form from './Form'

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    }
  }

  handleEdit = () => {
    this.setState({
      editMode: ! this.state.editMode
    })
  }

  handleSubmit = (details) => {
    this.props.onSubmit(details)
    this.handleEdit();
  }

  render() {
    let date = new Date(this.props.item.dateOfExp);
    let shortDate = date.getMonth() + 1 + '/' + date.getFullYear();
    return (
      <ListItem
        key={this.props.item.id}
        button
      // onClick={() => onSelect(id)}
      >
        <ListItemText
          primary={<Grid container>
            <Grid item xs>
              <Typography variant="subtitle1"> {this.props.item.name}</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle1"> {this.props.item.description}</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle2"> {shortDate}</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle2"> {this.props.item.category}</Typography>
            </Grid>
            {this.state.editMode
              ? <Form item={{ name: this.props.item.name, description: this.props.item.description, dateOfExp: this.props.item.dateOfExp, category: this.props.item.category }}
                user={this.props.user}
                onSelectEdit = {this.handleEdit}
                button="Save"
                onSubmit={this.handleSubmit} />
              : null}
          </Grid>}

        />
        <ListItemSecondaryAction>
          {/* <IconButton onClick={() => this.props.onSelectEdit(this.props.item.id)}> */}
          <IconButton onClick={() => this.handleEdit()}>

            <Edit />
          </IconButton>
          <IconButton onClick={() => this.props.onDelete(this.props.item.id)}>
            <Delete />
          </IconButton >
        </ListItemSecondaryAction>


      </ListItem>
    )
  }
}

export default Item
