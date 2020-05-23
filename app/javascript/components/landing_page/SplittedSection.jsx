import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MoppyButton from "../MoppyButton";

const SplittedSection = ({ content }) => {
  const {
    title,
    message,
    buttonText,
    image,
    buttonURL,
    avatar,
    classname,
  } = content;
  const { alt, id, file } = image;
  const currentHost = useSelector((state) => state.hosts.current_host);
  console.log(buttonURL);
  return (
    <div className={`splitted ${classname}`}>
      <div className="splitted__wrapper">
        <div className="splitted__left">
          <img src={file} id={id} alt={alt} />
          {avatar ? <img src={avatar} id="avatar" alt={alt} /> : ""}
        </div>
        <div className="splitted__right">
          <div className="splitted__title">
            <h2>{title}</h2>
          </div>
          <div className="splitted__message">
            <p>{message}</p>
          </div>
          <Link to={currentHost ? buttonURL : "/hosts/log_in"}>
            <MoppyButton className="splitted__button salmon-button">
              {buttonText}
            </MoppyButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SplittedSection;
