import React, { Component } from 'react'
import {List, ListItem, ListItemText, ListItemSecondaryAction, IconButton,Edit, Delete} from '@material-ui/core';

export class ItemList extends Component {
  render() {
    return (
      <List component="ul">
      {this.props.items.map((element, index) => 
        <ListItem
        key={index}
        button
        // onClick={() => onSelect(id)}
      >
        <ListItemText primary={element.name} />
        <ListItemSecondaryAction>
          <IconButton>
            {/* <Edit /> */}
          </IconButton>
          <IconButton >
            {/* <Delete /> */}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      )}
      </List>
    )
  }
}

export default ItemList
