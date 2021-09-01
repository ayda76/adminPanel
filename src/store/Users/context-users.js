import React from 'react';

const ContextUsers=React.createContext({
    items:[],
    onADD:(user)=>{}
})
export default ContextUsers;