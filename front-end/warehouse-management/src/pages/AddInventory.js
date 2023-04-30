import React, { useState } from 'react';

function ProductTable() {
  const [products, setProducts] = useState([]);
  const [aisle, setAisle] = useState('');
  const [column, setColumn] = useState('');
  const [level, setLevel] = useState('');
  const [sku, setSku] = useState('');
  const [qty, setQty] = useState('');


  const handleAddProduct = () => {
    const newProduct = { aisle, column, level, sku, qty};
    setProducts([...products, newProduct]);
    setAisle('');
    setColumn('');
    setLevel('');
    setSku('');
    setQty('');
    
  };

  return (
    <div>
      <h1>Product Table</h1>
      <table>
        <thead>
          <tr>
            <th>Aisle</th>
            <th>Column</th>
            <th>Level</th>
            <th>SKU</th>
            <th>Qty</th>
          
          </tr>
        </thead>
        <tbody>
          {products.map((products, index) => (
            <tr key={index}>
              <td>{products.aisle}</td>
              <td>{products.column}</td>
              <td>{products.level}</td>
              <td>{products.sku}</td>
              <td>{products.qty}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        
        
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
}

export default ProductTable;
