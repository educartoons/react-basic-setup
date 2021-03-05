import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase';
import { collectIdsAndDocs } from '../../utils';

function SingleProduct(props) {
  const [product, setProduct] = useState(null);

  async function getProduct(id) {
    const snapshot = await firestore.collection('products').doc(id).get();

    const dataProduct = collectIdsAndDocs(snapshot);

    setProduct(dataProduct);

  }

  useEffect(() => {
    getProduct(props.id);
  })

  if (product === null) return <p>Loading product...</p>

  return (
    <div className="container mx-auto">
      <div className="grid gap-8 grid-cols-3 px-6">
        <div className="col-span-2">
          <div className="grid gap-4 grid-cols-2">
            {
              product.images.map((image) => <figure className="">
                <img src={image} alt={product.name} />
              </figure>)
            }
          </div>
        </div>
        <div className="col-span-1">
          <p>${product.price}</p>
          <h1 className="text-2xl font-semibold my-1">{product.name}</h1>
          {product.exclusive && <p className="text-yellow-600">Exclusivo miembros de nike</p>}
          <button className="mt-6 mb-6 block w-100 bg-gray-900 h-12  text-sm text-white rounded-full text-center w-full">Iniciar sesion para comprar</button>
          <p className="font-base">{product.description}</p>
          <h3 className="mt-3">Colores disponibles:</h3>
          <ul className="list-disc mt-2 pl-4">
            {
              product.colors.map(color => <li>{color}</li>)
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct;