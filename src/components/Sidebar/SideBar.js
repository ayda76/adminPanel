import React from 'react'
import styles from'./SideBar.module.css'
function SideBar(props) {
    return (
        <React.Fragment>
            <div className={styles.SideBar}>
                <div className={styles.menubuttons}>
                <button onClick={props.onShowProducts}>products</button>
                </div>
          
           <div className={styles.menubuttons}>
           <button onClick={props.onShowUsers}>users</button>
           </div>
            
            </div>
        </React.Fragment>
    )
}

export default SideBar

