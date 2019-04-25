import React, { Component } from 'react'
import { Grid, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Edit, Delete, Typography } from '@material-ui/core';

export class ItemList extends Component {
  render() {
    return (
      <List component="ul">
      <ListItem>
        <ListItemText>
          <Grid container>
          <Grid item xs>
                 <Typography variant="display1">Name</Typography>
                 </Grid>
                 <Grid item xs>
                 <Typography variant="display1">description</Typography>
                 </Grid>
                 <Grid item xs>
                 <Typography variant="display1"> Date of experince</Typography>
                 </Grid>
                 <Grid item xs>
                 <Typography variant="display1"> Category</Typography>
                 </Grid>
          </Grid>
        </ListItemText>
      </ListItem>
    
        {this.props.items.map((element, index) =>
          <ListItem
            key={index}
            button
          // onClick={() => onSelect(id)}
          >
            <ListItemText
              primary={<Grid
                container>
                  <Grid item xs>
                 <Typography variant="subtitle1"> {element.name}</Typography>
                 </Grid>
                 <Grid item xs>
                 <Typography variant="subtitle1"> {element.description}</Typography>
                 </Grid>
                 <Grid item xs>
                 <Typography variant="subtitle2"> {element.dateOfExp}</Typography>
                 </Grid>
                 <Grid item xs>
                 <Typography variant="subtitle2"> {element.category}</Typography>
                 </Grid>



              </Grid>}

            />
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
