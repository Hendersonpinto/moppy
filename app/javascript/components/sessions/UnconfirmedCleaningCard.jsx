import React from "react";
import { Link } from "react-router-dom";

import SvgChatIcon from "../dashboard/icons/SvgChatIcon";
import vince from "../../../assets/images/vince150.svg";

const UnconfirmedCleaningCard = ({ session }) => {
  const { id, cleaner, date, time, hours, house } = session;
  console.log(session);
  console.log(house);
  console.log(house.street);
  return (
    <div className="cleaning-card" key={id}>
      <div className="cleaning-card__heading">
        <Link to="/" className="avatar">
          <img src={vince}></img>
        </Link>
        <div className="name">
          <p>{house.street}</p>
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

        <SvgChatIcon />
      </div>
    </div>
  );
};

export default UnconfirmedCleaningCard;
