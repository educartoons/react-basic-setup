import React, { useState } from 'react';

function useInput(defaultValue, label, placeholder) {
  const [value, setValue] = useState(defaultValue);

  const handleValue = (e) => {
    setValue(e.target.value);
  }

  const id = `use-dropdown-${label}`;

  const Input = () => {
    return <label className="block mb-3" htmlFor={id}>
      <input name={id} onChange={handleValue} onBlur={handleValue} value={value} placeholder={placeholder} className="border border-gray-300 font-light h-8 rounded-sm text-sm  w-full px-2" type="text" />
    </label>
  }

  return [Input, value];
}

export default useInput;