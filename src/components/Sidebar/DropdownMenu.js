import React from 'react'
import styles from './DropdownMenu.module.css';
function DropdownMenu(props) {
    const selectMenu=(event)=>{
        if(event.target.value==="Products"){
            props.onShowProducts();
        }
        if(event.target.value==="Users"){
            props.onShowUsers();
        }

    }
    return (
        <select onClick={selectMenu} className={styles.dropdown}>
            <option value="">Menu</option>
            <option value="Products">Products </option>
            <option value="Users">Users</option>
        </select>
    )
}

export default DropdownMenu
