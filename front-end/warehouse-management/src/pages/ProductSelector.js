import React, { useState, useEffect } from 'react';

function ProductSelector(props) {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        async function fetchProducts() {
            try {
                const rawProducts = await fetch(`http://${process.env.DATABASE_URI}:${process.env.DATABASE_PORT}/products`);
                const newProducts = await rawProducts.json();
                setAllProducts(newProducts);
            } catch (err) {
                console.error(err)
            }
        }
        fetchProducts();
    }, [])
    return (
        <div>
            <select onChange={props.onChange} value={props.value}>
                {allProducts.map((product) => (
                    <option value={product.prod_id}>{product.sku}</option>
                ))}
            </select>
        </div>
    )
}

export default ProductSelector