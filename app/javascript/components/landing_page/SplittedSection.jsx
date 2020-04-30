import React from "react";

const SplittedSection = ({
  classname,
  title,
  message,
  buttonText,
  file,
  alt,
  id,
}) => {
  return (
    <div className={`splitted ${classname}`}>
      <div className="splitted__wrapper">
        <div className="splitted__left">
          <img src={file} id={id} alt={alt} />
        </div>
        <div className="splitted__right">
          <div className="splitted__title">
            <h2>{title}</h2>
          </div>
          <div className="splitted__message">
            <h4>{message}</h4>
          </div>
          <button className="splitted__button salmon-button">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplittedSection;
