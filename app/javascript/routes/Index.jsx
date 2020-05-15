import React from "react";

import { Router, Route, Switch } from "react-router-dom";
import history from "../packs/history";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import Dashboard from "../components/dashboard/Dashboard";
import NotFound from "../components/NotFound";
import SessionsIndex from "../components/sessions/SessionsIndex";
import ProtectedRoute from "./ProtectedRoute";
import AppRoute from "./AppRoute";
import LogLayout from "../components/LogLayout";

const Routes = (props) => {
  return (
    <Router history={history}>
      <Switch>
        {/* With <Switch>, only the first child <Route> that matches the location gets rendered. */}
        {/* So in case we use /:id, it does not consider /home with home as the id. */}
        <AppRoute path="/" navBar={NavBar} exact component={Home} />
        <AppRoute
          path="/all_sessions"
          navBar={NavBar}
          exact
          component={SessionsIndex}
        />
        <AppRoute
          path="/hosts/sign_up"
          exact
          component={LogLayout}
          type="logout"
          currentHost={props.currentHost}
          redirectTo="/hosts/"
        />
        <AppRoute
          path="/hosts/log_in"
          exact
          component={LogLayout}
          type="login"
          currentHost={props.currentHost}
          redirectTo="/hosts/"
        />
        <ProtectedRoute
          path="/hosts"
          component={Dashboard}
          currentHost={props.currentHost}
          redirectTo="/hosts/log_in"
        />
        <Route path="/*" exact component={NotFound} />
      </Switch>
    </Router>
  );
};
export default Routes;
