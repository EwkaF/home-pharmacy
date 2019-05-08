import React, { Component } from 'react'
import { Grid, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import Form from './Form'

export class Item extends Component {
  render() {
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
              <Typography variant="subtitle2"> {this.props.item.dateOfExp}</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle2"> {this.props.item.category}</Typography>
            </Grid>
{this.props.editMode
? <Form item={{ name: this.props.item.name, description: this.props.item.description, dateOfExp: this.props.item.dateOfExp, category: this.props.item.category }} />
: null}
          </Grid>}

        />
        <ListItemSecondaryAction>
          <IconButton onClick={() => this.props.onSelectEdit(this.props.item.id)}>
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
