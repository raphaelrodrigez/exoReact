// AdminRoute.js
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';

export const AdminRoute = ({ component: Component, ...rest }) => {
  const { user, isAdmin } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user && isAdmin() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: user ? '/dashboard' : '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};