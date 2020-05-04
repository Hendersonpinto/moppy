import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { logHost } from "../actions/index";
import LogForm from "./LogForm";

import SuperheroUp from "../../assets/images/superheroIn.svg";
import SuperheroIn from "../../assets/images/superheroIn.svg";
import HomeIcon from "../../assets/images/homeIcon.svg";
import GoogleIcon from "../../assets/images/googleIcon.svg";
import LockIcon from "../../assets/images/lockIcon.svg";
import Logo from "../../assets/images/logo.svg";

class LogContainer extends React.Component {
  onSubmit = (formValues) => {
    this.props.logHost(formValues);
  };

  render() {
    console.log(this.props);
    return (
      <div className={`log__wrapper ${this.props.type}`}>
        <div className={`log__left ${this.props.type}`}>
          <div className="log__title">
            <h1>
              {this.props.type === "login"
                ? "We'll make it shine..."
                : "Welcome to moppy!"}
            </h1>
          </div>
          <img
            src={this.props.type === "login" ? SuperheroIn : SuperheroUp}
            id="superheroLog"
            alt="cleaner"
          />
        </div>
        <div className={`log__right ${this.props.type}`}>
          <div className="myform">
            <div className="myform__header">
              <img src={Logo}></img>
            </div>
            <h3>Welcome back</h3>
            <LogForm
              onSubmit={this.onSubmit}
              myerror={this.props.myerror}
              buttonImage={LockIcon}
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
          </div>
          <Link to="/" className="log__home">
            <div className="log__home-wrapper">
              <p>Go to home</p>
              <img src={HomeIcon}></img>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.hosts.error) {
    return {
      myerror: state.hosts.error,
    };
  }
  return { myerror: null };
};

export default connect(mapStateToProps, { logHost })(withRouter(LogContainer));
