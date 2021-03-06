import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { logHost } from "../actions/index";
import { createHost } from "../actions/index";
import LogForm from "./LogForm";
import LogOutForm from "./LogOutForm";
import logInFields from "./forms/logInFields";
import logOutFields from "./forms/logOutFields";

import SuperheroUp from "../../assets/images/superheroIn.svg";
import SuperheroIn from "../../assets/images/superheroIn.svg";
import HomeIcon from "../../assets/images/homeIcon.svg";
import HomeIconGreen from "../../assets/images/homeIconGreen.svg";
import GoogleIcon from "../../assets/images/googleIcon.svg";
import LockIcon from "../../assets/images/lockIcon.svg";
import Logo from "../../assets/images/logo.svg";

const LogLayout = (props) => {
  const myerror = useSelector((state) => {
    if (state.hosts.error) {
      return state.hosts.error;
    }
    return null;
  });

  const isMobile = useSelector((state) => state.dom.isMobile);
  const dispatch = useDispatch();

  const onLogInSubmit = (formValues) => {
    dispatch(logHost(formValues));
  };

  const onLogOutSubmit = (formValues) => {
    dispatch(createHost(formValues));
  };

  const renderForm = (logType) => {
    if (logType === "login") {
      return (
        <>
          <h3>Welcome back</h3>
          <LogForm
            onSubmit={onLogInSubmit}
            myerror={myerror}
            buttonImage={LockIcon}
            fields={logInFields}
            logType="login"
          ></LogForm>
          <div className="separator__wrapper">
            <div className="separator"></div>
            <span>or sign in with</span>
            <div className="separator"></div>
          </div>
          <button className="mybutton white-button">
            <div className="google">
              <img src={GoogleIcon}></img>
              <p>Google</p>
            </div>
          </button>
          <Link to="/hosts/sign_up" className="log__home">
            <p className="formFooter">
              Don't have an account? <span>Sign Up</span>
            </p>
          </Link>
        </>
      );
    }
    return (
      <>
        <h3>Create your account</h3>
        <LogOutForm
          onSubmit={onLogOutSubmit}
          myerror={myerror}
          buttonImage={LockIcon}
          fields={logOutFields}
          logType="logout"
        ></LogOutForm>

        <div className="separator__wrapper">
          <div className="separator"></div>
          <span>or sign up with</span>
          <div className="separator"></div>
        </div>
        <button className="mybutton white-button">
          <div className="google">
            <img src={GoogleIcon}></img>
            <p>Google</p>
          </div>
        </button>
        <Link to="/hosts/log_in" className="log__home">
          <p className="formFooter">
            Already have an account? <span>Log In</span>
          </p>
        </Link>
      </>
    );
  };

  const renderLeftSide = (logType, isMobile) => {
    if (!isMobile) {
      return (
        <>
          <div className={`log__left ${logType}`}>
            <div className={`log__title ${logType}`}>
              <h2>
                {logType === "login"
                  ? "We'll make it shine..."
                  : "Welcome to moppy!"}
              </h2>
            </div>
            <img
              src={logType === "login" ? SuperheroIn : SuperheroUp}
              id="superheroLog"
              alt="cleaner"
            />
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className={`log__wrapper ${props.type}`}>
      {renderLeftSide(props.type, isMobile)}
      <div className={`log__right ${props.type}`}>
        <div className="myform">
          <div className="myform__header">
            <img src={Logo}></img>
          </div>
          {renderForm(props.type)}
        </div>
        <Link to="/" className="log__home">
          <div className={`log__home-wrapper ${props.type}`}>
            <p>Go to home</p>
            <img src={props.type === "login" ? HomeIcon : HomeIconGreen}></img>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(LogLayout);
