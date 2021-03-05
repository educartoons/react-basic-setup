import React from 'react';
import { useParams } from 'react-router-dom';

import Template from '../components/Template'
import SingleProduct from '../components/SingleProduct'

function ProductPage() {
  const { id } = useParams();
  return <Template children={<SingleProduct id={id} />} />
}

export default ProductPage;