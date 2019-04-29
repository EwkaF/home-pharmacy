import React, { Component } from 'react'
import AddNewMedcine from './AddNewMedcine'
import ItemList from './ItemList'
import { Grid, Typography } from '@material-ui/core';



class UserList extends Component {
  constructor() {
    super()
    this.state = {
      medcineList: []
    }
  }

  handleSubmit = (details) => {
    console.log(details)
    console.log("Teraz bedzie już dobrze")
    fetch(' http://localhost:3004/users/' + this.props.user + '/medicinesList', {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          medcineList: [...prevState.medcineList,data]
        }))
        console.log("Successful" + data);

      });
  }

  componentDidMount(){
    fetch(' http://localhost:3004/users/'+ this.props.user + '/medicinesList').then( resp => {
      if (resp.ok)
       return resp.json();
      else
        throw new Error('Błąd sieci!');
    }).then( data => {
      console.log('Moje dane:', data);
      this.setState({
        medcineList: data
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
  
        <AddNewMedcine user={this.props.user} onSubmit={this.handleSubmit}/>
        </Grid>
          <ItemList items={this.state.medcineList}/>
        



      </div>
    )
  }
}

export default UserList
