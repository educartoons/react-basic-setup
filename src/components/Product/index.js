import React, { useEffect, useState } from 'react';

function Product(props) {
  const { product } = props;
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('Esto se ejecuta por solo una ves luego de ser rendereado');
    return () => {
      console.log('El componente ha sido removido')
    }
  }, [])

  useEffect(() => {
    console.log('Esto se ejecutara solo si el valor de product cambia');
  }, [product])

  useEffect(() => {
    console.log('Esto se ejecuta solo cuando el numero cambia');
  }, [number])

  return <div className="mb-5">
    <figure className="mb-3">
      <img src={product.image.url} alt="" />
    </figure>
    {
      product.exclusive ? <h3 className="font-medium text-orange">Exclusivo miembros nike</h3> : ''
    }
    <h3 className="font-medium">{product.name}</h3>
    {
      product.gender === 'male' ? <p className="font-light text-gray-400">Calzado de carrera para hombre</p> : <p className="font-light text-gray-400">Calzado de carrera para mujer</p>
    }
    <p className="text-gray-400">{product.colors.length} color</p>
    <p className="mt-5">${product.price}</p>
    <input className="bg-red-200" type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
  </div>
}

export default Product;