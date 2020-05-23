import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MoppyButton from "../MoppyButton";

// import MyImage from "app/assets/images/girl_sofa.png";
import Sofa from "../../../assets/images/girl_sofa.png";
import Bg from "../../../assets/images/bg4.svg";
const Banner = () => {
  const currentHost = useSelector((state) => state.hosts.current_host);

  return (
    <div className="banner">
      <div className="banner__bg">
        <img src={Bg} id="bg" alt="background vector" />
      </div>
      <div className="banner__hero">
        <div className="banner__content">
          <div className="banner__title">
            <h1>Get your home clean, whenever it fits you</h1>
          </div>
          <div className="banner__message">
            <h3>
              Hassle-free home cleaning. Just choose a date and one of our
              cleaners will make it shine.
            </h3>
          </div>
          <Link to={currentHost ? "/hosts" : "/hosts/log_in"}>
            <MoppyButton className="banner__button lg">Get Started</MoppyButton>
          </Link>
        </div>
        <div className="banner__image">
          <img src={Sofa} id="sofa" alt="girl on a couch" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
