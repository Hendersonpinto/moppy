import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutHost } from "../actions";

class NavBar extends React.Component {
  renderActions() {
    if (this.props.current_host) {
      return (
        <>
          <Link to="/sessions" className="navbar__action">
            All sessions
          </Link>
          <button
            onClick={() => {
              this.props.logoutHost(this.props.current_host.id);
            }}
            className="navbar__action"
          >
            Log Out
          </button>
        </>
      );
    }
    return (
      <>
        <Link to="/sessions" className="navbar__action">
          All sessions
        </Link>
        <Link to="/hosts/log_in" className="navbar__action">
          Log in
        </Link>
        <Link to="/hosts/sign_up" className="navbar__action">
          Sign up
        </Link>
      </>
    );
  }

  render() {
    return (
      <div className="navbar">
        <Link to="/" className="navbar__logo">
          Moppy
        </Link>
        <div className="navbar__actions">{this.renderActions()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.hosts.current_host);
  return {
    current_host: state.hosts.current_host,
  };
};

export default connect(mapStateToProps, { logoutHost })(NavBar);
