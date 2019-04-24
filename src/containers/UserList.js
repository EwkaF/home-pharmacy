import React, { Component } from 'react'
import AddNewMedcine from './AddNewMedcine'
import ItemList from './ItemList'



class UserList extends Component {
  constructor(props){
    super(props)
    this.state={
      medcineList: []
    }
  }
 
// componentDidMount(){
//   fetch(' http://localhost:3004/users/${this.props.user}`')
// }
  
  render() {
    return (
      <div>
        <h1>Witaj {this.props.user}</h1>
        Tu bedzie Twoja lista

        <AddNewMedcine />
        <ItemList />
      </div>
    )
  }
}

export default UserList
