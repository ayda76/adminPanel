import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styles  from './productList.module.css'
function ProductItem(props) {
    return (
       <React.Fragment>
           
           <tr  className={`col-12  ${styles.items}`}>
           <td className="col-3"><img src={`/images/ ${ props.image}`} height="50" width="50"/>   </td>
           <td className="col-2">{props.name}</td>
           <td className="col-3">{props.price}</td>
           <td className="col-3">{props.type}</td>
           <td className="col-1">{props.werehouse}</td>
           </tr>
         
       </React.Fragment>
    )
}

export default ProductItem
