import React from "react";

const Home = ({ title, buttonClass, buttonText, img1, img2 }) => {
  return (
    <div className="cta">
      <div className="cta__content">
        <h1>{title}</h1>
        <button className={buttonClass}>{buttonText}</button>
      </div>
      <img src={img1.file} id={img1.id} alt={img1.alt} />
      <img src={img2.file} id={img2.id} alt={img2.alt} />
    </div>
  );
};

export default Home;
