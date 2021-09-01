import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styles  from './productList.module.css'
function ProductItem(props) {
    return (
       <React.Fragment>
           
           <tr  className={`col-12  ${styles.items}`}>
           <td className="col-3">{props.name}</td>
           <td className="col-3">{props.price}</td>
           <td className="col-3">{props.color}</td>
           <td className="col-3">{props.werehouse}</td>
           </tr>
         
       </React.Fragment>
    )
}

export default ProductItem
