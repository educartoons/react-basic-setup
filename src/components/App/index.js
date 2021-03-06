import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary';
import Routes from '../../routes';
import ErrorFallback from '../ErrorFallback'
import { auth } from '../../firebase';

function App() {
  const [user, setUser] = useState(null);
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => {
      unsubscribeFromAuth();
    }
  }, [])
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App;