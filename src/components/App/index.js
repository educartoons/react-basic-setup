import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary';
import Routes from '../../routes';
import ErrorFallback from '../ErrorFallback'


function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ErrorBoundary>

  )
}

export default App;