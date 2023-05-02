import React, {useEffect, useState} from "react";
import ProdInventory from "./ProdInventory";

const InvByProd = () => {
    const [prodInv, setProdInv] = useState([])
    useEffect(() => {
        async function fetchData(){
            fetch('http://localhost:5000/products/inv')
                .then((response) => response.json())
                .then((actualData) => setProdInv(actualData))
                .catch((err) => { console.error(err) })
        }
        fetchData()
    }, [])
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
                    {prodInv[0].map((prod) => <ProdInventory product={prod} />)}
                </tbody>
            </table>
        </div>
    )
}

export default InvByProd