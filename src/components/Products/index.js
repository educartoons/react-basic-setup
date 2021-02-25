import React, { useState, useEffect } from 'react';

import Product from '../Product';

import { data } from './data';


function Products() {
  const [products, setProducts] = useState([]);
  const [number, setNumber] = useState(5);

  // First time the component is rendered
  useEffect(() => {
    setTimeout(() => {
      setProducts(data.products.slice(0, number));
    }, 1000);
  }, [])

  // This functions is executed when number changes
  useEffect(() => {
    if (number < 200) {
      setTimeout(() => {
        number = number + 6;
        setProducts(data.products.slice(0, number));
      }, 1000);
    }
  }, [number])

  const handleInput = (e) => {
    setNumber(+e.target.value);
  }

  return (
    <div>
      <select name="" id="" onChange={handleInput} onBlur={handleInput}>
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="9">9</option>
      </select>
      <div className="grid grid-cols-3 gap-4">
        {
          products.length === 0 ? <p>Loading producsts...</p> : ''
        }
        {
          products.map((product, index) => <Product key={index} product={product} />)
        }
      </div>
    </div>
  )
}

export default Products;