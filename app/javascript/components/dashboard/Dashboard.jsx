import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LeftNavBar from "../LeftNavBar";
import SessionsList from "../sessions/SessionsList";

const Dashboard = (props) => {
  const current_host = useSelector((state) => state.hosts.current_host);
  const dispatch = useDispatch();

  return (
    <div className="dashboard">
      <LeftNavBar />
      <div className="panel">
        <h1 className="panel__title">
          {`${
            this.props.current_host.first_name.charAt(0).toUpperCase() +
            this.props.current_host.first_name.slice(1)
          }'s Dashboard`}
        </h1>
        <div className="panel__content">
          <SessionsList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
