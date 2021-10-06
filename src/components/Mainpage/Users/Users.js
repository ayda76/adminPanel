import React from 'react'
import UserForm from './UserForm'
import UserList from './UsersList'

function Users() {
    return (
        <React.Fragment>
            <UserForm/>
            <UserList/>
        </React.Fragment>
    )
}

export default Users
