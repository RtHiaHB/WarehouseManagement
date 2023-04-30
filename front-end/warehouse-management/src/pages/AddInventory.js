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
            <th> </th>
            <th>SKU</th>
            <th>Qty</th>
            <th> </th>
          
          </tr>
        </thead>
        <tbody>
    
            <tr key={index}>
              <td><input type="text" name="aisle" id="aisle"></input></td>
              <td><input type="text" name="col_number" id="col_number"></input></td>
              <td><input type="text" name="lvl" id="lvl"></input></td>
              <td><button onClick={searchLocation}>Search</button></td>
              <td><input type="text" name="sku" id="sku"/></td>
              <td><input type="text" name="qty" id="qty"/></td>
              <td><button onClick={addInventory}>AddInventory</button></td>
            </tr>
          
        </tbody>
      </table>
      <div>
        
        
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
}

export default ProductTable;
