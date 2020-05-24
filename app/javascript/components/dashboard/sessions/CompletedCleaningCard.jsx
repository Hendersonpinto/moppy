import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import MoppyButton from "../../MoppyButton";

import StarIcon from "../icons/StarIcon";
import vince from "../../../../assets/images/vince150.svg";

const CompletedCleaningCard = ({ session }) => {
  const { id, cleaner, date, duration } = session;
  const convertedDate = new Date(date);

  return (
    <div className="cleaning-card" key={id}>
      <div className="cleaning-card__heading-completed">
        <Link to="/" className="avatar">
          <img src={vince}></img>
        </Link>
        <p>{cleaner.first_name + " " + cleaner.last_name}</p>
      </div>

      <div className="datetime">
        <div className="date">
          <span className="dark">Date: </span>
          <span>{`${convertedDate.getDate()}/${
            convertedDate.getMonth() + 1
          }`}</span>
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
          <span className="dark">Cost: </span>
          <span>{`${cleaner.price_hour} €`}</span>
        </div>
      </div>
      <MoppyButton className="white-button sm filled rate" color="info">
        <div className="button-text">
          <p>Rate</p>
          <StarIcon />
        </div>
      </MoppyButton>
    </div>
  );
};

export default CompletedCleaningCard;
