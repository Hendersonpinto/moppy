import React from "react";
import { Route } from "react-router-dom";

const AppRoute = ({ component, navBar, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={(props) => {
        return (
          <>
            {navBar ? React.createElement(navBar) : null}
            {React.createElement(component, props)}
          </>
        );
      }}
    />
  );
};

export default AppRoute;
