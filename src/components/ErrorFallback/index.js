import React from 'react';

function ErrorFallback({ error }) {
  return <div className="container mx-auto">
    <div className="bg-red-400">
      <p>Upss algo mal ocurrió</p>
      <a href="/">Click aqui para regresar al inicio</a>
    </div>
  </div>
}

export default ErrorFallback;