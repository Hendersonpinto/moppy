import React from "react";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import { deleteCleaning } from "../../actions";

const UnconfirmedCleaningCard = ({ session }) => {
  const dispatch = useDispatch();
  const { id, cleaner, date, time, hours, house } = session;
  console.log(session);
  console.log(house);
  console.log(house.street);

  const handleClick = () => {
    dispatch(deleteCleaning(id));
  };

  return (
    <div className="cleaning-card" key={id}>
      <div className="cleaning-card__heading">
        <p className="address">{house.street}</p>
      </div>
      <div className="datetime">
        <div className="date">
          <span className="dark">Date: </span>
          <span>{date}</span>
        </div>
        <div className="time">
          <span className="dark">Time: </span>
          <span>{time}</span>
        </div>
      </div>
      <div className="duration">
        <div>
          <span className="dark">Duration: </span>
          <span>{`${hours} hours`}</span>
        </div>
        <div>
          <span className="dark">Rooms: </span>
          <span>{house.rooms}</span>
        </div>
      </div>
      <Button className="delete-button" color="danger" onClick={handleClick}>
        <div className="content">
          <p>Delete</p>
          <p className="x-button">X</p>
        </div>
      </Button>
    </div>
  );
};

export default UnconfirmedCleaningCard;
