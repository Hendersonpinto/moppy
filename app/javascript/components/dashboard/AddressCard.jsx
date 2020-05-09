import React from "react";

import Building from "../../../assets/images/building.svg";

const AddressCard = (owner) => {
  return (
    <div className="address-card">
      <div className="left">
        <img src={Building} alt="address"></img>
      </div>
      <div className="right">
        <div className="group">
          <p className="title">Address</p>
          <p>Nedre Bakklandet 61, Trondheim</p>
        </div>
        <div className="group">
          <p className="title">Area</p>
          <p>165 sqm</p>
        </div>
        <div className="group">
          <p className="title">Rooms</p>
          <p>4</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
