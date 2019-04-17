import React, { Component } from 'react'

class UserList extends Component {
  constructor(props){
    super(props)
    this.state={
      medcineList: []
    }
  }
 
// componentDidMount(){
//   fetch(' http://localhost:3004/users/${this.props.match.params.id}`')
// }
  
  render() {
    return (
      <div>
        <h1>Witaj {this.props.user}</h1>
        Tu bedzie Twoja lista
      </div>
    )
  }
}

export default UserList
