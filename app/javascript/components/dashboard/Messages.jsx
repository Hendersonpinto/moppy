import React from "react";
import { Link } from "react-router-dom";

import ChatBackground from "../../../assets/images/chatBackground.svg";

const Messages = () => {
  return (
    <>
      <div className="welcome-message">
        <img src={ChatBackground} alt="chat" />

        <h1>Coming soon...</h1>
      </div>
    </>
  );
};

export default Messages;
