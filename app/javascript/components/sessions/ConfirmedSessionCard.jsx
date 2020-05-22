import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import SvgChatIcon from "../dashboard/icons/SvgChatIcon";
import vince from "../../../assets/images/vince150.svg";

const ConfirmedSessionCard = ({ session }) => {
  const { id, cleaner, date, time, duration } = session;
  const convertedDate = new Date(date);
  console.log(convertedDate.getMinutes());

  return (
    <div className="cleaning-card" key={id}>
      <div className="cleaning-card__heading">
        <Link to="/" className="avatar">
          <img src={vince}></img>
        </Link>
        <div className="name">
          <p>{cleaner.first_name + " " + cleaner.last_name}</p>
          <div className="rating">
            <div className="rating-bar">
              <div className="rating-score"></div>
            </div>
            <span id="rating-score">4.7</span>
          </div>
        </div>
      </div>
      <div className="price__wrapper">
        <span className="price">{`${cleaner.price_hour} €`}</span>
        <span>per hour</span>
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

        <Button className="delete-button" color="info">
          Contact
        </Button>
      </div>
    </div>
  );
};

export default ConfirmedSessionCard;
