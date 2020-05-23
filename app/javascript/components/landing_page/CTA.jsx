import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MoppyButton from "../MoppyButton";

const CTA = ({ content }) => {
  console.log(content);
  const { title, buttonClass, buttonText, yoga, plants } = content;

  const currentHost = useSelector((state) => state.hosts.current_host);

  return (
    <div className="cta">
      <div className="cta__content">
        <h1>{title}</h1>
        <Link to={currentHost ? "/hosts" : "/hosts/sign_up"}>
          <MoppyButton className={buttonClass}>
            {currentHost ? "Request a cleaning" : "Sign up"}
          </MoppyButton>
        </Link>
      </div>
      <img src={yoga.file} id={yoga.id} alt={yoga.alt} />
      <img src={plants.file} id={plants.id} alt={plants.alt} />
    </div>
  );
};

export default CTA;
