import React, { useState } from 'react';

function useDropdown(defaultValue, options, label) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const Dropdown = (
    <label className="block mt-2" htmlFor="">
      {label}
      <select onChange={handleChange} className="block mt-2 w-full rounded-full" name="" id="">
        {
          options.map((option, index) => <option key={index} value={option}>{option}</option>)
        }
      </select>
    </label>
  )

  return [Dropdown, value]
}

export default useDropdown;