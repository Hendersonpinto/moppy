import React from "react";
import { Link } from "react-router-dom";

import CalendarBackground from "../../../assets/images/calendarBackground.svg";

const Calendar = () => {
  return (
    <>
      <div className="welcome-message">
        <img src={CalendarBackground} alt="calendar" />

        <h1>Coming soon...</h1>
      </div>
    </>
  );
};

export default Calendar;
