import { render } from '@testing-library/react';
import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

function App() {
  return (
    <div>
      <Header />
      <h1>Bienvenidos a ReactJS</h1>
      <Footer />
    </div>
  )
}

export default App;