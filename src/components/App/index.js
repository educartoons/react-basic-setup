import React, { useState } from 'react';

import Products from '../Products';
import Form from '../Form';

function App() {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('');
  const handleCheckboxChange = () => {
    setChecked(!checked);
  }
  const handleInputTextChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <div className="container">
      <div className="flex">
        <div className="w-1/4">
          <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
          <input className="bg-red-100" type="text" value={value} onChange={handleInputTextChange} />
          {
            checked ? <Form value={value} /> : ''
          }
        </div>
        <div className="w-3/4">
          <Products />
        </div>
      </div>
    </div>
  )
}

export default App;