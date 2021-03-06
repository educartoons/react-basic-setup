import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import ProductsPages from '../pages/ProductsPage';
import ProductPage from '../pages/ProductPage';
import SignInPage from '../pages/SignInPage';
import NotFoundPage from '../pages/NotFoundPage';
import AdminPage from '../pages/AdminPage';
import AddProductPage from '../pages/AddProductPage';

import PrivateRoute from '../auth/PrivateRoute'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/products/:type" component={ProductsPages} />
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/signin" component={SignInPage} />
      <PrivateRoute path="/add-product" component={AddProductPage} />
      <PrivateRoute path="/admin" component={AdminPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  )
}

export default Routes;