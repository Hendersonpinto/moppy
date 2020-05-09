import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, currentHost, ...rest }) => {
  console.log(currentHost);
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentHost ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to={{ pathname: "/hosts/log_in" }} />
        );
      }}
    />
  );
};

export default ProtectedRoute;
