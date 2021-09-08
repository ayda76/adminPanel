import React,{useState,useContext} from 'react'
import styles from './UserForm.module.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import ContextUsers from '../../../store/Users/context-users';
import useHttp from '../../../custom-hooks/use-http';
import UsersList from './UsersList';
function UserForm() {
    const {requestHttp:fetchData}=useHttp();
  // const ctxUser= useContext(ContextUsers);
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


//const  createuser = ()=>{
 //   const user={name:newUser.name,email:newUser.email,username:newUser.username,password:newUser.password}
//}


 
const submitHandler=async(event)=>{

event.preventDefault();
fetchData({url:'https://onlineshopping-b2ab4-default-rtdb.firebaseio.com/users.json',
method:'POST',
body:newUser,
headers:{
    'Content-Type':'application/json'
  }
},()=>{})
 //   ctxUser.onADD(newUser); createuser.bind(null,newUser)
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
