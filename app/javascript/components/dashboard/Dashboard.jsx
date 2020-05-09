import React, { useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";
import Calendar from "./Calendar";
import Book from "./Book";
import History from "./History";
import Messages from "./Messages";
import Shop from "./Shop";
import Profile from "./Profile";
import SessionsList from "../sessions/SessionsList";
import AppRoute from "../../routes/AppRoute";
import NotFound from "../NotFound";

const Dashboard = (props) => {
  const current_host = useSelector((state) => state.hosts.current_host);
  const dispatch = useDispatch();

  return (
    <div className="dashboard">
      <LeftNavBar />
      <div className="panel">
        <h1 className="panel__title">
          {`${
            current_host.first_name.charAt(0).toUpperCase() +
            current_host.first_name.slice(1)
          }'s Dashboard`}
        </h1>
        <div className="panel__content">
          <Switch>
            <AppRoute
              path="/hosts"
              exact
              component={SessionsList}
              type="login"
            />
            <AppRoute
              path="/hosts/calendar"
              exact
              component={Calendar}
              type="login"
            />
            <AppRoute
              path="/hosts/history"
              exact
              component={History}
              type="login"
            />
            <AppRoute
              path="/hosts/messages"
              exact
              component={Messages}
              type="login"
            />
            <AppRoute path="/hosts/shop" exact component={Shop} type="login" />
            <AppRoute
              path="/hosts/profile"
              exact
              component={Profile}
              type="login"
            />
            <AppRoute path="/hosts/book" exact component={Book} type="login" />
            <AppRoute path="/hosts/*" exact component={NotFound} />
          </Switch>
        </div>
      </div>
      <RightNavBar />
    </div>
  );
};

export default Dashboard;
