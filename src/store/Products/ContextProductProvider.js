import React,{useState} from 'react'
import ContextProducts from './context-products'


function ContextProductProvider(props) {
  

    const [products,setProducts]=useState({});
    const [error,setError]=useState(null);


//adding products
    async function addingProducts(product){
        //https://onlineshopping-b2ab4-default-rtdb.firebaseio.com/
        console.log(product);
        try{
            const response=await fetch('https://onlineshopping-b2ab4-default-rtdb.firebaseio.com/products.json',{
                method:"POST",
                body:JSON.stringify(product),
                headers:{
                    'Content-Type':'application/json'
                  }
            });
            const data= await response.json();
            console.log(data)


            setProducts(product)
        }catch(error){
            setError(error.message);  
        }
     
    }



const addingProduct={
    items:products,
    onADD:addingProducts,
   
}

    return (
       <ContextProducts.Provider value={addingProduct}>
{props.children}
       </ContextProducts.Provider>
    )
}

export default ContextProductProvider;
