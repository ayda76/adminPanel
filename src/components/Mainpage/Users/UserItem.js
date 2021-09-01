import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styles  from './UserList.module.css'

function UserItem(props) {
    return (
       <React.Fragment>
           
           <tr  className={`col-12  ${styles.items} `}>
           <td className="col-3 p-0">{props.name}</td>
           <td className="col-3 p-0">{props.email}</td>
           <td className="col-3 p-0">{props.username}</td>
           <td className="col-3 p-0">{props.password}</td>
           </tr>
         
       </React.Fragment>
    )
}

export default UserItem
