import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";

import { logoutHost } from "../actions";
import MoppyButton from "./MoppyButton";

import Logo from "../../assets/images/logo.svg";

const NavBar = (props) => {
  const isSignedIn = useSelector((state) => state.hosts.isSignedIn);
  const currentHost = useSelector((state) => state.hosts.current_host);
  const dispatch = useDispatch();

  const renderActions = () => {
    if (isSignedIn) {
      if (props.location.pathname !== "/hosts/dashboard") {
        return (
          <>
            <Link to="/hosts" className="navBar__action">
              <MoppyButton className="white-button">Dashboard</MoppyButton>
            </Link>
            <MoppyButton
              className="navBar__action"
              onClick={() => {
                dispatch(logoutHost(currentHost.id));
              }}
            >
              Log out
            </MoppyButton>
          </>
        );
      }
      return (
        <>
          <Link to="/" className="navBar__action">
            <MoppyButton className="white-button">Home</MoppyButton>
          </Link>
          <MoppyButton
            className="navbar__action"
            onClick={() => {
              dispatch(logoutHost(currentHost.id));
            }}
          >
            Log out
          </MoppyButton>
        </>
      );
    }
    return (
      <>
        <Link to="/hosts/log_in" className="navBar__action">
          <MoppyButton className="white-button">Log in</MoppyButton>
        </Link>
        <Link to="/hosts/sign_up" className="navBar__action">
          <MoppyButton>Sign up</MoppyButton>
        </Link>
      </>
    );
  };

  return (
    <div className="navBar">
      <Link to="/" className="navBar__logo">
        <div className="logo">
          <img src={Logo} id="logo" alt="logo" />
        </div>
      </Link>
      <div className="navBar__actions">{renderActions()}</div>
    </div>
  );
};

export default withRouter(NavBar);
