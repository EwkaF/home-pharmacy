import React, { Component } from 'react'
import { Grid, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton,Typography } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

export class ItemList extends Component {

  // handleClick =() =>{
  //   this.props.onDelete(id)
  // }
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
    
        {/* {this.props.items.map((element, index) => */}
        {this.props.items.map(({id,name,description, dateOfExp, category}, index) =>

          <ListItem
            key={index}
            button
          // onClick={() => onSelect(id)}
          >
            <ListItemText
              primary={<Grid
                container>
                  <Grid item xs>
                 <Typography variant="subtitle1"> {name}</Typography>
                 </Grid>
                 <Grid item xs>
                 <Typography variant="subtitle1"> {description}</Typography>
                 </Grid>
                 <Grid item xs>
                 <Typography variant="subtitle2"> {dateOfExp}</Typography>
                 </Grid>
                 <Grid item xs>
                 <Typography variant="subtitle2"> {category}</Typography>
                 </Grid>

              </Grid>}

            />
            <ListItemSecondaryAction>
              <IconButton>
                <Edit />
              </IconButton>
              <IconButton    onClick={() => this.props.onDelete(id)
}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )}
      </List>
    )
  }
}

export default ItemList
