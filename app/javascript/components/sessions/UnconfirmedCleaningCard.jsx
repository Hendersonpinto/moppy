import React from "react";
import { Button } from "reactstrap";

const UnconfirmedCleaningCard = ({ session, handleDelete }) => {
  const { id, cleaner, date, time, duration, house } = session;
  const convertedDate = new Date(date);
  console.log(session);
  console.log(house);
  console.log(house.street);

  return (
    <div className="cleaning-card" key={id}>
      <div className="cleaning-card__heading">
        <p className="address">{house.street}</p>
      </div>
      <div className="datetime">
        <div className="date">
          <span className="dark">Date: </span>
          <span>{`${convertedDate.getDate()}/${convertedDate.getMonth()}`}</span>
        </div>
        <div className="time">
          <span className="dark">Time: </span>
          <span>{`${convertedDate.getHours()}:${convertedDate
            .getMinutes()
            .toString()
            .padStart(2, "0")}`}</span>
        </div>
      </div>
      <div className="duration">
        <div>
          <span className="dark">Duration: </span>
          <span>{`${duration} hours`}</span>
        </div>
        <div>
          <span className="dark">Rooms: </span>
          <span>{house.rooms}</span>
        </div>
      </div>
      <Button
        className="delete-button"
        color="danger"
        onClick={() => {
          handleDelete(id);
        }}
      >
        <div className="content">
          <p>Delete</p>
          <p className="x-button">X</p>
        </div>
      </Button>
    </div>
  );
};

export default UnconfirmedCleaningCard;
