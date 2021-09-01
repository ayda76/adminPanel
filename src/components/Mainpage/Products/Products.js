import React from 'react'
import ProductForm from './ProductForm'
import ProductsList from './ProductsList'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './products.css'
function Products() {
    return (
       
            <div className="row">
            <div className="col-12">
            <ProductForm/>
            </div>
          
            <div className="col-12">
            <ProductsList />
            </div>
            </div>
    
    )
}

export default Products
