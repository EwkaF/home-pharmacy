import React, { Component } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button} from '@material-ui/core';
import Form from './Form'

export class AddNewMedcine extends Component {
    constructor(){
        super();
        this.state={
            open: false
        }
    }

    handleToggle = () => {
        this.setState({ 
            open: !this.state.open });
      };

      handleSubmit =(details) => {
        console.log(details)
        fetch(' http://localhost:3004/users/' + this.props.user + '/medicinesList', {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
      }).then(response => response.json())
      .then(data => {
              console.log("Successful" + data);

          });
      
        this.handleToggle();
      }

      
  render() {
    return (
        <div>
        <Button variant="outlined" color="primary" onClick={this.handleToggle}>
          Add new medcine
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleToggle}
         
        >
          <DialogTitle id="form-dialog-title">Add new medcine
</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your new medcines details
            </DialogContentText>
            <Form user={this.props.user} onSubmit={this.handleSubmit}/>
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={this.handleClick} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClick} color="primary">
              Add
            </Button>
          </DialogActions> */}
        </Dialog>
      </div>
    )
  }
}

export default AddNewMedcine
