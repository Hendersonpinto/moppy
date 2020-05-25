import React from "react";
import { Link } from "react-router-dom";

import ProfileBackground from "../../../assets/images/profileBackground.svg";

const Profile = () => {
  return (
    <>
      <div className="welcome-message">
        <img src={ProfileBackground} alt="profile" />

        <h1>Coming soon...</h1>
      </div>
    </>
  );
};

export default Profile;
