import React from "react";

// import MyImage from "app/assets/images/girl_sofa.png";
import Sofa from "../../../assets/images/girl_sofa.png";
import Bg from "../../../assets/images/bg.png";
const Home = () => {
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
          <button className="banner__button green-button">Get Started</button>
        </div>
        <div className="banner__image">
          <img src={Sofa} id="sofa" alt="girl on a couch" />
        </div>
      </div>
    </div>
  );
};

export default Home;
