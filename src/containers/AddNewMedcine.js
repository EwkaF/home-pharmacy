import React, { Component } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button} from '@material-ui/core';
import Form from './Form'

export class AddNewMedcine extends Component {
    constructor(props){
        super(props);
        this.state={
            open: false
        }
    }

    handleClick = () => {
        this.setState({ 
            open: !this.state.open });
      };
  render() {
    return (
        <div>
        <Button variant="outlined" color="primary" onClick={this.handleClick}>
          Add new medcine
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
         
        >
          <DialogTitle id="form-dialog-title">Add new medcine
</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your new medcines details
            </DialogContentText>
            <Form />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClick} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClick} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default AddNewMedcine
