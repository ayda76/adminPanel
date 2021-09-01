import React,{useState} from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SideBar from '../Sidebar/SideBar'
import Products from './Products/Products'
import Users from './Users/Users'
import  './MainPage.css'
import DropdownMenu from '../Sidebar/DropdownMenu'
function MainPage() {
const [showProduct, setShowProduct] = useState(false);
const [showUsers, setShowUsers] = useState(false);
let content=<h1>WELCOME TO ADMIN PANEL</h1>;
const showProdutsHandler =()=>{
    console.log('productsssss')
    setShowProduct(true)
 //content=<Products/>;
 setShowUsers(false)
}
const showUsersHandler =()=>{
    setShowUsers(true)
    setShowProduct(false)
   // content=<Users/>;
}
if(showProduct){
    content=<Products/>;
}
if(showUsers){
    content=<Users/>;
}

    return (
      
            <div className="container-fluid">
            <div className="row p-0" >
          <div className="d-none d-md-block col-md-3 col-lg-3  p-0"> 
           <SideBar onShowProducts={showProdutsHandler} onShowUsers={showUsersHandler}/>
         </div>
         <div className="col-xs-12 col-sm-12 d-block d-md-none  p-0 dropdown" > 
           <DropdownMenu onShowProducts={showProdutsHandler} onShowUsers={showUsersHandler}/>
         </div>
         <div className=" col-lg-9 col-md-9">  {content}</div>
         </div>
         </div>
      
    )
}

export default MainPage
