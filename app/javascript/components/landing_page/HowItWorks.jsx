import React from "react";

const renderSteps = (steps) => {
  return steps.map((step) => {
    return (
      <div className="step">
        <div className="step__icon">
          <img src={step.file} alt={step.alt} />
        </div>
        <div className="step__content">
          <h4>{step.title}</h4>
          <p>{step.message}</p>
        </div>
      </div>
    );
  });
};

const HowItWorks = ({ title, message, steps, background }) => {
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
        <div className="hiw__steps">{renderSteps(steps)}</div>
      </div>
    </div>
  );
};

export default HowItWorks;
