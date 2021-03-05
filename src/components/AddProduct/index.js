import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

import { firestore } from '../../firebase';
import useInput from './useInput';
import useDropdown from './useDropdown'
import { ReactComponent as NikeLogotype } from '../../images/nike.svg'

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`

function AddProduct() {
  const [saving, setSaving] = useState(false);
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState(null);
  const [InputName, name] = useInput('', 'name', 'Nombre del producto');
  const [InputPrice, price] = useInput(0, 'price', 'Precio del producto');
  const [InputColors, colors] = useInput('', 'colors', 'Add colors separated by comma');
  const [DropdownExclusive, exclusive] = useDropdown('yes', ['yes', 'no'], 'Is this item exclusive?');
  const [DropdownGender, gender] = useDropdown('male', ['male', 'female'], 'Select a gender: ');
  const [DropdownAvailable, available] = useDropdown("true", ["true", "false"], 'Is available?')

  const history = useHistory();

  useEffect(() => {
    console.log('once');
  }, []);

  const validation = () => {
    if (file !== null && name !== '' && colors !== '' && description !== '' && price !== '' && colors !== '') {
      return true;
    }
    return false;
  }

  const uploadImages = async (images) => {
    const urls = [];
    for (let i = 0; i < images.length; i++) {

      const formData = new FormData();
      formData.append('file', images[i]);
      formData.append('tags', 'image of nike');
      formData.append('upload_preset', 'sneakers');
      formData.append('api_key', process.env.REACT_APP_CLOUDINARY_API_KEY);
      formData.append("timestamp", (Date.now() / 1000) | 0);

      const response = await axios.post(CLOUDINARY_URL, formData, {
        headers: { "X-Requested-With": "XMLHttpRequest" }
      });

      urls.push(response.data.url);
    }
    return urls;
  }

  const handleSendProduct = async () => {

    if (!validation()) return;

    setSaving(true);

    const featuredImage = (await uploadImages([file]))[0];
    const images = await uploadImages(files);

    await firestore.collection('products').add({
      name: name,
      price: Number(price),
      colors: colors.split(',').map(color => color.trim()),
      exclusive: exclusive,
      gender: gender,
      available: Boolean(available),
      description: description,
      featuredImage: featuredImage,
      images: images
    });

    setSaving(false);

    history.push('/products/new');

  }

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  }

  const handleChangeFiles = (e) => {
    setFiles(Array.from(e.target.files));
  }


  return <div className="container mx-auto">
    <div className="text-center">
      <NikeLogotype className="inline" />
    </div>
    <h3 className="font-bold text-center mb-5">AGREGA UN NUEVO PRODUCTO</h3>
    <div className="grid grid-cols-2">
      <div className="px-8">
        <div className="">

          {InputName}
          {InputPrice}
          {InputColors}

          <div>
            <input onChange={handleChangeFile} type="file" name="" id="" />
            {
              file !== null && <figure>
                <img src={URL.createObjectURL(file)} alt="" />
              </figure>
            }

          </div>

          {DropdownExclusive}
          {DropdownGender}
          {DropdownAvailable}

          <textarea onChange={(e) => setDescription(e.target.value)} onBlur={(e) => setDescription(e.target.value)} placeholder="Descripcion" value={description} className="border border-gray-300 font-light h-32 mt-5 rounded-sm text-sm p-2  w-full px-2" />
          <button disabled={saving} onClick={handleSendProduct} className="mt-3 block w-100 bg-gray-900 h-8  text-sm text-white rounded-sm text-center w-full">{saving ? 'Guardando...' : 'Agregar'}</button>
        </div>


      </div>
      <div className="px-8">
        <label htmlFor="">
          Sube mas imagenes de referencia:
          <input onChange={handleChangeFiles} className="mt-2" type="file" name="" id="" multiple />
        </label>
        <div className="grid grid-cols-2">
          {
            files !== null && files.map(xx => <figure className="p-2">
              <img src={URL.createObjectURL(xx)} alt="" />
            </figure>)
          }
        </div>

      </div>
    </div>
  </div>
}

export default AddProduct;