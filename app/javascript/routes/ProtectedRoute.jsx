import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  redirectTo,
  currentHost,
  ...rest
}) => {
  console.log(currentHost);
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentHost ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to={{ pathname: redirectTo }} />
        );
      }}
    />
  );
};

export default ProtectedRoute;
