import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { firestore } from '../../firebase';
import useInput from './useInput';
import { ReactComponent as NikeLogotype } from '../../images/nike.svg'

function AddProduct() {
  const [description, setDescription] = useState('');
  const [InputName, name] = useInput('', 'name', 'Nombre del producto');
  const [InputPrice, price] = useInput(0, 'price', 'Precio del producto');

  const history = useHistory();


  const handleSendProduct = async () => {
    const docRef = await firestore.collection('products').add({
      name: name,
      price: price,
      available: true,
      exclusive: false,
    });

    history.push('/products/new');

  }


  return <div className="container mx-auto">
    <div className="flex items-center justify-center h-screen">
      <div className="w-full px-6 sm:w-2/4 sm:px-0 md:px-0 md:w-1/4">
        <div className="text-center">
          <NikeLogotype className="inline" />
        </div>
        <h3 className="font-bold text-center mb-5">AGREGA UN NUEVO PRODUCTO</h3>
        <InputName />
        <InputPrice />
        <textarea onChange={(e) => setDescription(e.target.value)} onBlur={(e) => setDescription(e.target.value)} placeholder="Descripcion" value={description} className="border border-gray-300 font-light h-32 rounded-sm text-sm p-2  w-full px-2" />
        <button onClick={handleSendProduct} className="mt-3 block w-100 bg-gray-900 h-8  text-sm text-white rounded-sm text-center w-full">Agregar</button>
      </div>
    </div>
  </div>
}

export default AddProduct;