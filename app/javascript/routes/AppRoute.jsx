import React from "react";
import { Route, Redirect } from "react-router-dom";

const AppRoute = ({
  component: Component,
  currentHost,
  redirectTo,
  navBar,
  ...restProps
}) => {
  console.log(restProps);
  return (
    <Route
      {...restProps}
      render={(props) => {
        return currentHost ? (
          <Redirect to={{ pathname: redirectTo }} />
        ) : (
          <>
            {navBar ? React.createElement(navBar) : null}
            <Component {...restProps} {...props} />
          </>
        );
      }}
    />
  );
};

export default AppRoute;
