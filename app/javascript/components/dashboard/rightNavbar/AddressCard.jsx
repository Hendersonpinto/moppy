import React from "react";

import Building from "../../../../assets/images/building.svg";

const AddressCard = ({ owner }) => {
  if (Array.isArray(owner.houses) && owner.houses.length) {
    const { street, house_number, city, size, rooms } = owner.houses[0];

    return (
      <div className="address-card">
        <div className="left">
          <img src={Building} alt="address"></img>
        </div>
        <div className="right">
          <div className="group">
            <p className="title">Address</p>
            <p>{`${street} ${house_number}, ${city}`}</p>
          </div>
          <div className="group">
            <p className="title">Area</p>
            <p>{`${size} sqm`}</p>
          </div>
          <div className="group">
            <p className="title">Rooms</p>
            <p>{rooms}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="address-card">
      <img src={Building} alt="address"></img>
    </div>
  );
};

export default AddressCard;
