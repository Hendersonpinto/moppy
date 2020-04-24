import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import ShowSession from "../components/ShowSession";
import NotFound from "../components/NotFound";
import CreateSession from "../components/CreateSession";
import DeleteSession from "../components/DeleteSession";
import EditSession from "../components/EditSession";
import SessionsIndex from "../components/SessionsIndex";
import CleanersIndex from "../components/cleaners/CleanersIndex";
import HostsIndex from "../components/hosts/HostsIndex";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sessions" exact component={SessionsIndex} />
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
        <Route path="/*" exact component={NotFound} />
      </Switch>
    </Router>
  );
};
export default Routes;
