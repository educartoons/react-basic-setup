import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase';
import { collectIdsAndDocs } from '../../utils';

import Product from '../Product';


function Products(props) {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const snapshot = await firestore.collection('products').get();

    const productsFromDB = snapshot.docs.map(collectIdsAndDocs);

    setProducts(productsFromDB);
  }

  useEffect(() => {

    getProducts();

  }, [])


  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-0 lg:grid-cols-4 gap-4">
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