import React,{useState} from 'react'
import UserForm from './UserForm'
import UserList from './UsersList'

function Users() {
    const[DataNew,setData]=useState('');
  const  newAdded =(data)=>{
setData(data);
  }
    return (
        <React.Fragment>
            <UserForm onAdd={newAdded}/>
            <UserList newUser={DataNew} />
        </React.Fragment>
    )
}

export default Users
