import React, { useState, useEffect } from 'react';

import Product from '../Product';

import { data } from './data';


function Products() {
  const [products, setProducts] = useState([]);

  // First time the component is rendered
  useEffect(() => {
    setTimeout(() => {
      setProducts(data.products);
    }, 1000);
  }, [])

  return (
    <div>
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