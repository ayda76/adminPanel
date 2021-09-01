import React,{useState,useContext} from 'react'
import styles from './productForm.module.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContextProducts from '../../../store/Products/context-products';
function ProductForm() {
   const ctxProduct= useContext(ContextProducts);
const [newProduct, setProduct] = useState({
    name:'',
    price:'',
    color:'',
    werehouse:0

})

const nameProductChangeHandler=(event)=>{
    setProduct((prev)=>{
        return {...prev ,name:event.target.value}
    })
}
const priceProductChangeHandler=(event)=>{
    setProduct((prev)=>{
        return {...prev ,price:event.target.value}
    })
}
const colorProductChangeHandler=(event)=>{
    setProduct((prev)=>{
        return {...prev ,color:event.target.value}
    })
}
const werehouseProductChangeHandler=(event)=>{
    setProduct((prev)=>{
        return {...prev ,werehouse:event.target.value}
    })
}

const submitHandler=(event)=>{

event.preventDefault();
console.log(newProduct);
console.log(ctxProduct);
    ctxProduct.onADD(newProduct);
}
    return (
       <React.Fragment>
           <form className={`col-12 ${styles.form}`} onSubmit={submitHandler}>
               <h1 >ADD Your Products:)</h1>
               <div className={styles.inputform}>
               
               <input  type="text" onChange={nameProductChangeHandler} placeholder="product name"/>
               </div>
              
               <div className={styles.inputform}>
              
               <input  type="text" onChange={priceProductChangeHandler} placeholder="price$"/>
               </div>
               
               <div className={styles.inputform}>
              
               <input type="text" onChange={colorProductChangeHandler} placeholder="color"/>
               </div>
              
               <div className={styles.inputform}>
             
               <input  type="number" min="0" onChange={werehouseProductChangeHandler} placeholder="werehouse amount"/>
               </div>
              <div className={styles.inputform}>
              <button type="submit">Add Product</button>
              </div>
            
           </form>
       </React.Fragment>
    )
}

export default ProductForm
