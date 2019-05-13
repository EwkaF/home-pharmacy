import React, { Component } from 'react'
import { Grid, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import Form from './Form'
import Item from './Item'


export class ItemList extends Component {

  handleSubmit = (details) => {
    this.props.onSubmit(details)
  }
  // handleEdit = () => {
  //   this.props.onSelectEdit()
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

        {this.props.items.map(({ id, name, description, dateOfExp, category }) => 

          <Item item={{ id, name, description, dateOfExp, category }} 
          onDelete={this.props.onDelete}
          key={id}
          onSelectEdit = {this.props.handleEdit}
          onSubmit = {this.handleSubmit}
          user = {this.props.user}
          button = "Save" />


          
          // let date = new Date(dateOfExp);
          // let shortDate = date.getMonth() + 1 + '/' + date.getFullYear();
         
          // return <ListItem
          //   key={id}
          //   button
          //  onClick={() => onSelect(id)}
          // >
          //   <ListItemText
          //     primary={<Grid container>

          //       <Grid item xs>
          //         <Typography variant="subtitle1"> {name}</Typography>
          //       </Grid>
          //       <Grid item xs>
          //         <Typography variant="subtitle1"> {description}</Typography>
          //       </Grid>
          //       <Grid item xs>
          //         <Typography variant="subtitle2">{shortDate}</Typography>
          //       </Grid>
          //       <Grid item xs>
          //         <Typography variant="subtitle2"> {category}</Typography>
          //       </Grid>
          //       {this.props.editMode
          //         ? <Form item = {{ name: name, description: description, dateOfExp: dateOfExp, category: category }}
          //           user = {this.props.user}
          //           button = "Save"
          //           onSelectEdit = {this.handleEdit}
          //           onSubmit = {this.handleSubmit} />
          //         : null}
          //     </Grid>}

          //   />
          //   <ListItemSecondaryAction>
          //     <IconButton onClick={() => this.props.onSelectEdit(id)}>
          //       <Edit />
          //     </IconButton>
          //     <IconButton onClick={() => this.props.onDelete(id)}>
          //       <Delete />
          //     </IconButton >
          //   </ListItemSecondaryAction>
          // </ListItem>
  

        )}
      </List>




    )
  }
}

export default ItemList
