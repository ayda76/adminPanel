import React,{useState,useContext} from 'react'
import styles from './productForm.module.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import ContextProducts from '../../../store/Products/context-products';
import useHttp from '../../../custom-hooks/use-http';
function ProductForm(props) {
   
 //  const ctxProduct= useContext(ContextProducts);
const [newProduct, setProduct] = useState({
    name:'',
    price:'',
    type:'',
    image:'',
    werehouse:0

})
const {requestHttp:fetchData}= useHttp();
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
const typeProductChangeHandler=(event)=>{
    setProduct((prev)=>{
        return {...prev ,type:event.target.value}
    })
}
const werehouseProductChangeHandler=(event)=>{
    setProduct((prev)=>{
        return {...prev ,werehouse:event.target.value}
    })
}
const imageProductChangeHandler=(event)=>{
    setProduct((prev)=>{
       const imgUrl= event.target.value;
      const img= imgUrl.slice(12);
        return {...prev ,image:img}
    })
}
const sendNewProduct=()=>{
props.onAdd(newProduct);
}
const submitHandler= async(event)=>{

event.preventDefault();
fetchData({url:'https://test-a7043-default-rtdb.firebaseio.com/products.json',
method:'POST',
headers:{
    'Content-Type':'application/json'
  },
body:newProduct

},sendNewProduct);
   // ctxProduct.onADD(newProduct);
}
    return (
       <React.Fragment>
           <form className={`col-12 ${styles.form}`} onSubmit={submitHandler} method="POST"  encType="multipart/form-data">
               <h1 >ADD Your Products:)</h1>
               <div className={styles.inputform}>
               
               <input  type="text" onChange={nameProductChangeHandler} placeholder="product name"/>
               </div>
              
               <div className={styles.inputform}>
              
               <input  type="text" onChange={priceProductChangeHandler} placeholder="price$"/>
               </div>
               
               <div className={styles.inputform}>
              
               <input type="text" onChange={typeProductChangeHandler} placeholder="type"/>
               </div>
              
               <div className={styles.inputform}>
              
              <input type="file" onChange={imageProductChangeHandler} placeholder="image"/>
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
