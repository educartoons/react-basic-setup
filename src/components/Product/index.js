import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
  const { product } = props;

  return <div className="mb-5">
    <figure className="mb-3">
      <img src={product.featuredImage} alt="" />
    </figure>
    {
      product.exclusive ? <h3 className="font-medium text-orange">Exclusivo miembros nike</h3> : ''
    }
    <Link to={`/product/${product.id}`}><h3 className="font-medium">{product.name}</h3></Link>
    {
      product.gender === 'man' ? <p className="font-light text-gray-400">Calzado de carrera para hombre</p> : <p className="font-light text-gray-400">Calzado de carrera para mujer</p>
    }
    <p className="text-gray-400">{product.colors.length} color</p>
    <p className="mt-5">${product.price}</p>
  </div>
}

export default Product;