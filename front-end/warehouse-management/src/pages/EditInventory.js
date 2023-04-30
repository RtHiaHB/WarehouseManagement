import React, { useState, useEffect } from 'react';

function EditTable() {
  const [products, setProducts] = useState([]);
  const [loc_id, setLoc_id] = useState();
  const [prod_id, setProd_id] = useState();
  const [qty, setQty] = useState();
  const [emptyLocations, setEmptyLocations] = useState([]);
    

  function padZeroes(num, size) {
    let numstr=num.toString()
    while (numstr.length < size) {
      numstr = "0" + numstr
    }
    return numstr;
  }

  const handleSubmit = async () => {
    console.log(loc_id)
    const locationURL = `http://localhost:5000/locations/${loc_id}`
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
      fetch('http://localhost:5000/products')
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
      fetch('http://localhost:5000/locations?sku=NOTHING')
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
    <div>
      <h1>Edit Inventory</h1>
      <h3>Select Location:</h3>
      {EmptyLocationDropdown()}

      <h3>Select SKU:</h3>
      {ProductDropdown()}
      
      <h3>Qty to Edit:</h3>
      <input type='text' key='qty' onChange={e => setQty(e.target.value)} defaultValue={0} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default EditTable;