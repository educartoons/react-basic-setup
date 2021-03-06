import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary';
import Routes from '../../routes';
import ErrorFallback from '../ErrorFallback'
import UserProvider from '../../provider/UserProvider';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <UserProvider>
          <Routes />
        </UserProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App;
