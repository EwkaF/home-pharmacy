import React, { Component } from 'react'
import AddNewMedcine from './AddNewMedcine'
import ItemList from './ItemList'
import { Grid, Typography } from '@material-ui/core';



class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      medcineList: []
    }
  }

  // componentDidMount(){
  //   fetch(' http://localhost:3004/users/${this.props.user}`')
  // }

  render() {
    return (
      <div>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center">
          <Typography variant="display3" style ={{textTransform:"capitalize"}}>Welcome {this.props.user}!</Typography>
  
        <AddNewMedcine />
          <ItemList />
        </Grid>



      </div>
    )
  }
}

export default UserList
