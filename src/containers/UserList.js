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

  componentDidMount(){
    fetch(' http://localhost:3004/users/'+ this.props.user).then( resp => {
      if (resp.ok)
       return resp.json();
      else
        throw new Error('Błąd sieci!');
    }).then( data => {
      console.log('Moje dane:', data.medicinesList);
      this.setState({
        medcineList: data.medicinesList
      })
    }).catch( err => {
      console.log('Błąd!', err);
    });
  }

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
        </Grid>
          <ItemList items={this.state.medcineList}/>
        



      </div>
    )
  }
}

export default UserList
