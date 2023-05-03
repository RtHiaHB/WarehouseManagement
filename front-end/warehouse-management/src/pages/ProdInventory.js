import React from 'react';

const ProdInventory = (props) => {
    console.log('in ProdInventory')
    console.log(props)
    return (
        <tr key={props.product.prod_id}>
            <td>{props.product.sku}</td>
            <td>{props.product.totqty}</td>
        </tr>
    )
}

export default ProdInventory