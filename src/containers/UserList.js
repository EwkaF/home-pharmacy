import React, { Component } from 'react'

class UserList extends Component {
  constructor(props){
    super(props)
    this.state={
      medcineList: []
    }
  }
 
componentDidMount(){
  fetch(' http://localhost:3004/users')
}
  
  render() {
    return (
      <div>
        Tu bedzie lista
      </div>
    )
  }
}

export default UserList
