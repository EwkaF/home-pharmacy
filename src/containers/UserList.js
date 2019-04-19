import React, { Component } from 'react'
import AddNewItem from './AddNewItem'
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

        <AddNewItem />
        <ItemList />
      </div>
    )
  }
}

export default UserList
