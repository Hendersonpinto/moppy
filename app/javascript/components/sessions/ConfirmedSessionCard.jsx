import React from "react";
import { Link } from "react-router-dom";

import SvgChatIcon from "../dashboard/icons/SvgChatIcon";
import vince from "../../../assets/images/vince150.svg";

const ConfirmedSessionCard = ({ session }) => {
  const { id, cleaner, date, time, hours } = session;
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

      <div className="date">
        <span className="dark">Date: </span>
        <span>{date}</span>
      </div>
      <div className="time">
        <span className="dark">Time: </span>
        <span>{time}</span>
      </div>
      <div className="duration">
        <div>
          <span className="dark">Duration:</span>
          <span>{hours}</span>
        </div>

        <SvgChatIcon />
      </div>
    </div>
  );
};

export default ConfirmedSessionCard;
