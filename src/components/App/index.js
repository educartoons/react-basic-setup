import React from 'react';

import Footer from '../Footer';
import Message from '../Message';
import Header from '../Header';

const messages = [
  'Se cargo correctamente libreria 2',
  'Se cargo correctamente libreria 3',
  'Se cargo correctamente libreria 4',
  'Se cargo correctamente libreria 5',
  'Se cargo correctamente libreria 6'
]

function App() {
  return (
    // codigo JSX
    <div>
      <Header />
      <h1>Bienvenidos a ReactJS</h1>
      {
        messages.map(function (message, index) {
          return <Message key={index} message={message} />
        })
      }
      <Footer />
    </div>
  )
}

export default App;