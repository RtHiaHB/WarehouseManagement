import React, {useEffect, useState} from "react";
import ProdInventory from "./ProdInventory";

const InvByProd = () => {
    const [prodInv, setProdInv] = useState([])
    useEffect(() => {
        if (prodInv.length === 0) {
            fetchData()
        }
        console.log(prodInv)
    }, [])
    
    function fetchData(){
        console.log('here')
        fetch(`http://${process.env.DATABASE_URI}:${process.env.DATABASE_PORT}/products/inv`)
            .then((response) => response.json())
            .then((actualData) => {
                console.log(actualData)
                setProdInv(actualData)
            })
            .catch((err) => { console.error(err) })
    }

    return (
        <div>
            <h1>Inventory by Product</h1>
            <table>
                <thead>
                    <tr>
                        <td>
                            SKU
                        </td>
                        <td>
                            Total Qty
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {prodInv.map((prod) => <ProdInventory product={prod} />)}
                </tbody>
            </table>
        </div>
    )
}

export default InvByProd