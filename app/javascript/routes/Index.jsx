import React from "react";

import { Router, Route, Switch } from "react-router-dom";
import history from "../packs/history";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import HostCreate from "../components/hosts/HostCreate";
import HostLog from "../components/hosts/HostLog";
import Dashboard from "../components/Dashboard";
import ShowSession from "../components/sessions/ShowSession";
import NotFound from "../components/NotFound";
import CreateSession from "../components/sessions/CreateSession";
import DeleteSession from "../components/sessions/DeleteSession";
import EditSession from "../components/sessions/EditSession";
import SessionsIndex from "../components/sessions/SessionsIndex";
import CleanersIndex from "../components/cleaners/CleanersIndex";
import HostsIndex from "../components/hosts/HostsIndex";
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
        />
        {/* <AppRoute path="/hosts/log_in" exact component={HostLog} /> */}
        <AppRoute
          path="/hosts/log_in"
          exact
          component={LogLayout}
          type="login"
        />
        <ProtectedRoute
          path="/hosts/dashboard"
          exact
          component={Dashboard}
          currentHost={props.currentHost}
        />
        {/* <Route path="/cleaners" exact component={CleanersIndex} /> */}
        {/* <Route path="/hosts" exact component={HostsIndex} /> */}
        {/* <Route path="/sessions/new" exact component={CreateSession} /> */}
        {/* <Route path="/sessions/edit/:id" component={EditSession} /> */}
        {/* <Route path="/sessions/delete/:id" component={DeleteSession} /> */}
        {/* <Route path="/sessions/new" exact component={ShowSession} /> */}
        {/* <Route path="/cleaner/login" component={CleanerLogin} /> */}
        {/* <Route path="/cleaner/signup" component={CleanerLogOut} /> */}
        {/* <Route path="/host/login" component={HostLogin} /> */}
        {/* <Route path="/host/signup" component={HostLogout} /> */}
        {/* <Route path="/hosts/log_in" exact component={HostLog} /> */}
        <Route path="/*" exact component={NotFound} />
      </Switch>
    </Router>
  );
};
export default Routes;
