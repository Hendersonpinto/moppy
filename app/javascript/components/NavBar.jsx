import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutHost } from "../actions";

const NavBar = (props) => {
  const isSignedIn = useSelector((state) => state.hosts.isSignedIn);
  const currentHost = useSelector((state) => state.hosts.current_host);
  const dispatch = useDispatch();

  const renderActions = () => {
    if (isSignedIn) {
      if (props.location.pathname !== "/hosts/dashboard") {
        return (
          <>
            <Link to="/hosts/dashboard" className="navBar__action">
              Dashboard
            </Link>
            <button
              onClick={() => {
                dispatch(logoutHost(currentHost.id));
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
              dispatch(logoutHost(currentHost.id));
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
  };

  return (
    <div className="navBar">
      <Link to="/" className="navBar__logo">
        Moppy
      </Link>
      <div className="navBar__actions">{renderActions()}</div>
    </div>
  );
};

export default withRouter(NavBar);
