import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../components/Products';

function ProductsPage() {
  let { type } = useParams();
  console.log(type);
  return <div className="px-6">
    <Products type={type} />
  </div>
}

export default ProductsPage;