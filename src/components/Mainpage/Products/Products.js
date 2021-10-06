import React,{useState} from 'react'
import ProductForm from './ProductForm'
import ProductsList from './ProductsList'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './products.css'
function Products() {
 const[DataNew,setData]=useState('');
  const  newAdded =(data)=>{
setData(data);
  }
    return (
       
            <div className="row">
            <div className="col-12">
            <ProductForm onAdd={newAdded}/>
            </div>
          
            <div className="col-12">
            <ProductsList  newProduct={DataNew}/>
            </div>
            </div>
    
    )
}

export default Products
