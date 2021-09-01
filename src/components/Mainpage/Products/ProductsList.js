import React ,{useEffect,useState,useContext}from 'react'
import styles from './productList.module.css';
import ContextProducts from '../../../store/Products/context-products';
import ProductItem from './ProductItem';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function ProductsList() {
  const ctxProduct = useContext(ContextProducts);
    
const [products, setProducts] = useState([]);
const [error,setError]=useState(null);

let xxx=[]
useEffect(()=>{
    if(ctxProduct.items.length>0){
        xxx.push(ctxProduct.items);
        setProducts(xxx);
        console.log('products xxx',xxx)
    }
    else{
        fetchingProducts();
    }
    
},[ctxProduct.items])
  
//fetching products
async function fetchingProducts(){
 
    
        try{
            const response=await fetch('https://onlineshopping-b2ab4-default-rtdb.firebaseio.com/products.json')
            
            if(!response.ok){
                throw new Error('something went wrong!');
                }
    
            const data= await response.json();
           // const newProducts=[];
            for (const key in data){
                xxx.push({
                    id:Math.random(),
                    name:data[key].name,
                    price:data[key].price,
                    color:data[key].color,
                    werehouse:data[key].werehouse
                })
            }
           // console.log("products",newProducts)
            
            setProducts(xxx);
    
           
        }catch(error){
            setError(error.message);
        }
     
    } 



  const Items=products.map((item)=>
        <ProductItem 
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        color={item.color}
        werehouse={item.werehouse}
        />
    )
   console.log(Items);
    return (       
              <div  className={styles.listproducts} >
                 
                 
              <table className={` col-12  ${styles.items}`}>
                  <thead>
                  <tr className={`col-12  ${styles.items} `}>
                  <th className="col-3 p-0">name</th>
           <th className="col-3 p-0">price</th>
           <th className="col-3 p-0">color</th>
           <th className="col-3 p-0">werehouse</th>
                  </tr>
                  </thead>
                  <tbody>
                  {Items}
                  </tbody>
              
        
          </table>
           </div>
           

   
    )
}

export default ProductsList