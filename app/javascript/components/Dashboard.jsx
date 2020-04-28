import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { checkHost } from "../actions";
import LeftNavBar from "./LeftNavBar";
import SessionsList from "./sessions/SessionsList";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.checkHost();
  }

  render() {
    if (this.props.current_host) {
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
    }
    return "Loading...";
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    current_host: state.hosts.current_host,
  };
};

export default connect(mapStateToProps, { checkHost })(Dashboard);
