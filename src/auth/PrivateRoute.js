import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../provider/UserProvider'

function PrivateRoute({ component: Component, ...rest }) {
  const currentUser = useContext(UserContext);
  if (currentUser !== null) {
    return <Route {...rest} render={Component} />
  } else {
    return <Redirect to="/" />
  }

}

export default PrivateRoute;