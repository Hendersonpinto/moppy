import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutHost } from "../actions";

class NavBar extends React.Component {
  renderActions() {
    if (this.props.current_host) {
      if (this.props.location.pathname !== "/hosts/dashboard") {
        return (
          <>
            <Link to="/hosts/dashboard" className="navBar__action">
              Dashboard
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
          <Link to="/" className="navBar__action">
            Home
          </Link>
          <button
            onClick={() => {
              this.props.logoutHost(this.props.current_host.id);
            }}
            className="navBar__action"
          >
            Log Out
          </button>
        </>
      );
    }
    return (
      <>
        <Link to="/hosts/log_in" className="navBar__action">
          Log in
        </Link>
        <Link to="/hosts/sign_up" className="navBar__action">
          Sign up
        </Link>
      </>
    );
  }

  render() {
    return (
      <div className="navBar">
        <Link to="/" className="navBar__logo">
          Moppy
        </Link>
        <div className="navBar__actions">{this.renderActions()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    current_host: state.hosts.current_host,
  };
};

export default connect(mapStateToProps, { logoutHost })(withRouter(NavBar));
