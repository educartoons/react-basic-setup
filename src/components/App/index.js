import React, { useState } from 'react';

import Footer from '../Footer';
import Message from '../Message';
import Header from '../Header';

const RATE_DOLLAR_TO_PEN = 3.65316;

function App() {
  const [amount, setAmount] = useState(0);

  const handleInput = (e) => {
    setAmount(e.target.value);
  }

  return (
    // codigo JSX
    <div>
      <Header />
      <h1>Calcula tus dolares a soles</h1>
      <input type="text" value={amount} onChange={handleInput} onBlur={handleInput} />
      <Message amount={amount} change={amount * RATE_DOLLAR_TO_PEN} />
      <Footer />
    </div>
  )
}

export default App;