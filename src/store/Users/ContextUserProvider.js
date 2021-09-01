
import React,{useState} from 'react'
import ContextUsers from './context-users'
function ContextUserProvider(props) {
    //https://onlineshopping-b2ab4-default-rtdb.firebaseio.com/
   const[newdata,setData]= useState({});
 async function addUserHandler(user){
 const response=await fetch('https://onlineshopping-b2ab4-default-rtdb.firebaseio.com/users.json',{
    method:'POST',
    body:JSON.stringify(user),
    headers:{
        'Content-Type':'application/json'
      }
});

const data= await response.json();
console.log("This is data",data);

setData(user);

 }

    const users={
        items:newdata,
        onADD:addUserHandler
    }
    return (
        <ContextUsers.Provider value={users}>
            {props.children}
        </ContextUsers.Provider>
    )
}

export default ContextUserProvider
