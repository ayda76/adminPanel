import React,{useState,useContext} from 'react'
import styles from './UserForm.module.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContextUsers from '../../../store/Users/context-users';
function UserForm() {
   const ctxUser= useContext(ContextUsers);
const [newUser, setUser] = useState({
    name:'',
    email:'',
    username:'',
   password:''

})

const nameUserChangeHandler=(event)=>{
    setUser((prev)=>{
        return {...prev ,name:event.target.value}
    })
}
const emailUserChangeHandler=(event)=>{
    setUser((prev)=>{
        return {...prev ,email:event.target.value}
    })
}
const usernameUserChangeHandler=(event)=>{
    setUser((prev)=>{
        return {...prev ,username:event.target.value}
    })
}
const passwordUserChangeHandler=(event)=>{
    setUser((prev)=>{
        return {...prev ,password:event.target.value}
    })
}

const submitHandler=(event)=>{

event.preventDefault();
    ctxUser.onADD(newUser);
}
    return (
    
           <form className={`col-12 ${styles.form}`} onSubmit={submitHandler}>
               <h1 >ADD Your Users:)</h1>
               <div className={styles.inputform}>
               
               <input  type="text" onChange={nameUserChangeHandler} placeholder=" name"/>
               </div>
              
               <div className={styles.inputform}>
              
               <input  type="email" onChange={emailUserChangeHandler} placeholder="email"/>
               </div>
               
               <div className={styles.inputform}>
              
               <input type="text" onChange={usernameUserChangeHandler} placeholder="username"/>
               </div>
              
               <div className={styles.inputform}>
             
               <input  type="password"  onChange={passwordUserChangeHandler} placeholder="password"/>
               </div>
              <div className={styles.inputform}>
              <button type="submit">Add User</button>
              </div>
            
           </form>
    
    )
}

export default UserForm
