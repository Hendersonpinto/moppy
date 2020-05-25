import React from "react";
import { Link } from "react-router-dom";

import ShopBackground from "../../../assets/images/shopBackground.svg";

const Shop = () => {
  return (
    <>
      <div className="welcome-message">
        <img src={ShopBackground} alt="shop" />

        <h1>Coming soon...</h1>
      </div>
    </>
  );
};

export default Shop;
