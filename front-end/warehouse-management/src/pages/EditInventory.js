import React, { useState, useEffect } from 'react';

import "../App.css";
import LocationSelector from './LocationsSelector';
import ProductSelector from './ProductSelector';

function EditTable() {
  const [allProducts, setAllProducts] = useState([]);
  const [loc_id, setLoc_id] = useState();
  const [prod_id, setProd_id] = useState();
  const [sku, setSKU] = useState("");
  const [qty, setQty] = useState("");
  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      if (allLocations.length === 0){
        try {
          const rawLocations = await fetch('http://localhost:5000/locations');
          const newLocations = await rawLocations.json();
          setAllLocations(newLocations);
        } catch (err) {
          console.error(err);
        }
      } else {
        setLoc_id(allLocations[0].loc_id);
        setProd_id(allLocations[0].prod_id);
        setQty(allLocations[0].qty)
        setSKU(allProducts[prod_id].sku)
      }
    }
    async function fetchProducts() {
      if (allProducts.length === 0) {
        try {
          const rawProducts = await fetch('http://localhost:5000/products');
          const newProducts = await rawProducts.json();
          setAllProducts(newProducts);
        } catch (err) {
          console.error(err);
        }
      }
    }
    fetchLocations();
    fetchProducts();
  }, [allLocations, allProducts])

  const handleSubmit = async () => {
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
    setProd_id(allLocations[e.target.value].prod_id)
    setSKU(allLocations[e.target.value].sku)
    setQty(allLocations[e.target.value].qty)
  }

  
  const handleProductChange = (e) => {
    setProd_id(e.target.value)
    setSKU(allProducts[e.target.value].sku)
  }
  return (
    <div class="EditInventory">
      <h1>Edit Inventory</h1>
      <h3>Select Location:</h3>
      <LocationSelector onChange={handleLocationChange} locations={allLocations} />

      <h3>Selected SKU:</h3>
      <ProductSelector onChange={handleProductChange} value={prod_id} allProducts={allProducts} />
      
      <h3>Qty to Edit:</h3>
      <input type='text' id="qty" key='qty' value={qty} onChange={e => setQty(e.target.value)} defaultValue={0} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default EditTable;