import React,{useState,useCallback} from 'react'

const useHttp=()=> {
   
    const [error,setError]=useState(null);
const [newData,setNewData]=useState([]);
const [list,setList]=useState([]);
let   listItems=[];
   
 const requestHttp = useCallback( async (requestConfig,compFunction)=>{
    
        try{
            const response=await fetch(requestConfig.url,{
                method:requestConfig.method ? requestConfig.method: 'GET' ,
                body:JSON.stringify(requestConfig.body) ? JSON.stringify(requestConfig.body):null,
                headers:requestConfig.headers ? requestConfig.headers:{}
            })
            
            if(!response.ok){
                throw new Error('something went wrong!');
                }
    
            const data= await response.json();
           
          compFunction();
          setNewData(data);

          // console.log("list items",listItems);
           
        }catch(error){
            setError(error.message);
        }
     //console.log("new data length",newData);
  //   console.log("list items",listItems);
    },[]);

  //  console.log("list items out",listItems);
return {  requestHttp ,
    newData
   
}

}

export default useHttp;
