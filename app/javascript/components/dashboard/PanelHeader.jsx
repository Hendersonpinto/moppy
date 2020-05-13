import React from "react";

import Plants from "../../../assets/images/plants.png";
import Yoga from "../../../assets/images/yoga.svg";

const PanelHeader = ({ currentHost }) => {
  return (
    <div className="panel-header">
      <img src={Plants} alt="plants" id="plants"></img>
      <h1>
        {`Hi ${
          currentHost.first_name.charAt(0).toUpperCase() +
          currentHost.first_name.slice(1)
        }, looking for your next cleaner?`}{" "}
      </h1>

      <img src={Yoga} alt="yoga" id="yoga"></img>
    </div>
  );
};

export default PanelHeader;
