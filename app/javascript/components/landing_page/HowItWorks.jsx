import React from "react";
import { useSelector } from "react-redux";

const renderSteps = (steps, isMobile) => {
  console.log(isMobile);
  return steps.map((step) => {
    return (
      <div className="step" key={step.title}>
        <div className="step__icon">
          <img
            src={isMobile ? step.filePink : step.file}
            alt={step.alt}
            id={step.id}
          />
        </div>
        <div className="step__content">
          <h4>{step.title}</h4>
          <p className={isMobile ? "pink" : "dark"}>{step.message}</p>
        </div>
      </div>
    );
  });
};

const HowItWorks = ({ title, message, steps, background }) => {
  const isMobile = useSelector((state) => state.dom.isMobile);

  console.log(isMobile);
  return (
    <div className="hiw">
      <div className="hiw__bg">
        <img src={background} alt="hiw-bg" />
      </div>
      <div className="hiw__wrapper">
        <div className="hiw__heading">
          <h2>{title}</h2>
          <h3>{message}</h3>
        </div>
        <div className="hiw__steps">{renderSteps(steps, isMobile)}</div>
      </div>
    </div>
  );
};

export default HowItWorks;
