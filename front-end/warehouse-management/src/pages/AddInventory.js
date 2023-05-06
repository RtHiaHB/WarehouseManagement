import React, { useState, useEffect } from 'react';
import "../App.css";

function ProductTable() {
  const [products, setProducts] = useState([]);
  const [loc_id, setLoc_id] = useState();
  const [prod_id, setProd_id] = useState();
  const [qty, setQty] = useState();
  const [emptyLocations, setEmptyLocations] = useState([]);
    

  function padZeroes(num, size) {
    return num.toString().padStart(size, '0');
  }

  const handleSubmit = async () => {
    console.log(loc_id)
    const locationURL = `http://${process.env.DATABASE_URI}:${process.env.DATABASE_PORT}/locations/${loc_id}`
    const data = {
      "prod_id": prod_id,
      "qty": qty
    }
    await fetch(locationURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    window.location.reload(false)
  }

  const handleLocationChange = async (e) => {
    setLoc_id(e.target.value);
    console.log(loc_id)    
  }

  function ProductDropdown() {
    useEffect(() => {
      fetch(`http://${process.env.DATABASE_URI}:${process.env.DATABASE_PORT}/products`)
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error(error))
    }, []);

    return (
      <select onChange={e => setProd_id(e.target.value)}>
        {products.map(product => (
          <option key={product.sku} value={product.prod_id}>
            {product.sku}
          </option>
        ))}
      </select>
    );
  }
  function EmptyLocationDropdown() {
    useEffect(() => {
      fetch(`http://${process.env.DATABASE_URI}:${process.env.DATABASE_PORT}/locations?sku=NOTHING`)
        .then(response => response.json())
        .then(data => setEmptyLocations(data))
        .catch(error => console.error(error));
     
    }, []);
    return (
      <select onChange={e => handleLocationChange(e)}>
        {emptyLocations.map(location => (
          <option 
            key={`${padZeroes(location.aisle, 4)}-${padZeroes(location.col_number, 2)}-${padZeroes(location.lvl, 2)}`} 
            value={location.loc_id}>
            {`${padZeroes(location.aisle, 4)}-${padZeroes(location.col_number, 2)}-${padZeroes(location.lvl, 2)}`}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div class="AddInventory">
    
      <h1>Add Inventory</h1>
      <h3>Select Location:</h3>
      {EmptyLocationDropdown()}

      <h3>Select SKU:</h3>
      
      
      <h3>Qty to add:</h3>
      <input type='text' key='qty' onChange={e => setQty(e.target.value)} defaultValue={0} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ProductTable;