import React from "react";
import { Route } from "react-router-dom";

const AppRoute = ({ component: Component, navBar, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={(props) => {
        return (
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
