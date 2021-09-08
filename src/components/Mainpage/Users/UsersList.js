
import React ,{useState,useEffect,useContext, useCallback}from 'react'
import styles from './UserList.module.css';
import UserItem from './UserItem';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import ContextUsers from '../../../store/Users/context-users';
import useHttp from '../../../custom-hooks/use-http';
function UsersList() {
   
   //  const ctxUsers=useContext(ContextUsers);
 const [users, setUsers] = useState([]);
 const [error,setError]=useState(null);
const {requestHttp:fetchData,newData}=useHttp();
let newUsers=[];
console.log("show me new data",newData)



/*
const transformData =(data)=>{
       
    for (const key in data){
        newUsers.push({
            id:Math.random(),
            name:data[key].name,
            email:data[key].email,
            username:data[key].username,
            password:data[key].password
        })
        console.log("in the for",newUsers)
    }  
setUsers(newUsers);
console.log("this is length",newUsers.length)
console.log(newUsers)
}*/
/*
const transformData =useCallback(()=>{

   
    for (const key in newData){
        newUsers.push({
            id:Math.random(),
            name:newData[key].name,
            email:newData[key].email,
            username:newData[key].username,
            password:newData[key].password
        })
      
    }  
    setUsers(newUsers);

console.log("this is length",newUsers.length)
console.log(newUsers)
},[]);
*/

    
const transformData =()=>{
    for (const key in newData){
        newUsers.push({
            id:Math.random(),
            name:newData[key].name,
            email:newData[key].email,
            username:newData[key].username,
            password:newData[key].password
        })
      
    }  
    setUsers(newUsers);

console.log("this is length",newUsers.length)
console.log(newUsers)
}

useEffect(() => {

 fetchData({url:'https://onlineshopping-b2ab4-default-rtdb.firebaseio.com/users.json'},transformData);



 },[]);

 /*

let xxx=[];
 

useEffect(() => {
    if(ctxUsers.items.length>0){
        console.log("sayhellllo")
        xxx.push(ctxUsers.items);
       // console.log("this is xxx:",xxx)
        setUsers(xxx); 
    }else{
        fetchingUsers();
    }
   
 
 },[ctxUsers.items]);


 //fetching products
 async function fetchingUsers(){

         try{
             const response=await fetch('https://onlineshopping-b2ab4-default-rtdb.firebaseio.com/users.json')
             
             if(!response.ok){
                 throw new Error('something went wrong!');
                 }
     
             const data= await response.json();
             console.log(data)
             const newUsers=[];
             for (const key in data){
                xxx.push({
                     id:Math.random(),
                     name:data[key].name,
                     email:data[key].email,
                     username:data[key].username,
                     password:data[key].password
                 })
             }
           
             
        setUsers(xxx)
     
            
         }catch(error){
             setError(error.message);
         }
      
     } 

     console.log("this is xxx:",xxx)
     */
 
   const Items=users.map((item)=>
         <UserItem 
         key={item.id}
         id={item.id}
         name={item.name}
         email={item.email}
         username={item.username}
         password={item.password}
         />
     )

    
  
     return (       
               <div  className={styles.listproducts} >
                  
                  
               <table className={` col-12  ${styles.items}`}  >
                   <thead>
                   <tr className={`col-12  `}>
                   <th className="col-3">name</th>
            <th className="col-3">email </th>
            <th className="col-3">username</th>
            <th className="col-3">password</th>
                   </tr>
                   </thead>
                   <tbody>
                   {Items}
                   </tbody>
               
         
           </table>
            </div>
            
 
    
     )
 }

export default UsersList
