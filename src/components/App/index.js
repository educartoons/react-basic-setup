import React, { useState } from 'react';

import Products from '../Products';

function App() {
  return (
    <div className="container">
      <div className="flex">
        <div className="w-1/4">
          Filtros
        </div>
        <div className="w-3/4">
          <Products />
        </div>
      </div>
    </div>
  )
}

export default App;