import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import ProductsPage from '../pages/ProductsPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/products/:type" component={ProductsPage} />
    </Switch>
  )
}

export default Routes;