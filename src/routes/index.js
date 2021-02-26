import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import ProductsPage from '../pages/ProductsPage';
import SignInPage from '../pages/SignInPage';
import NotFoundPage from '../pages/NotFoundPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/products/:type" component={ProductsPage} />
      <Route path="/signin" component={SignInPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  )
}

export default Routes;