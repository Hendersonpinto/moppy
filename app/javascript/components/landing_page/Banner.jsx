import React from "react";

// import MyImage from "app/assets/images/girl_sofa.png";
import MyImage from "../../../assets/images/girl_sofa.png";
const Home = () => {
  return (
    <div className="banner">
      <div className="banner__hero">
        <div className="banner__content">
          <div className="banner__title">
            <h1>Get your home clean,</h1>
            <h1>whenever it fits you</h1>
          </div>
          <div className="banner__message">
            <h2>
              Hassle-free home cleaning. Choose a date and duration and our
              cleaners will make it shine.
            </h2>
          </div>
          <button className="banner__button green-button">Get Started</button>
        </div>
        <div>
          <img src={MyImage} className="banner__image" alt="girl on a couch" />
        </div>
      </div>
    </div>
  );
};

export default Home;
