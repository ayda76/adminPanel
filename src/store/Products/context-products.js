import React from 'react';

const ContextProducts=React.createContext({
    items:[],
    onADD:(product)=>{},
    onFetch:()=>{}
});
export default ContextProducts;