import React, { useState } from "react";
import TimeslotButton from "./TimeslotButton";
import { useDispatch, useSelector } from "react-redux";

import { pickTimeslot } from "../../actions";

function roundToHour(date) {
  const p = 60 * 60 * 1000; // milliseconds in an hour
  return new Date(Math.ceil(date.getTime() / p) * p);
}

const Timetable = ({ date }) => {
  const activeHour = useSelector((state) => state.sessions.timeslot);
  const dispatch = useDispatch();
  const renderTimes = (date) => {
    let now = new Date();
    const initialTime =
      date.getDate() === now.getDate()
        ? roundToHour(now)
        : new Date(date.setHours(8, 0));
    let list = [];
    for (let i = initialTime.getHours(); i <= 18; i++) {
      list.push(i);
    }

    const handleClick = (hour) => {
      dispatch(pickTimeslot(hour));
    };
    return list.map((hour) => {
      return (
        <TimeslotButton
          hour={hour}
          handleClick={handleClick}
          activeHour={activeHour}
        />
      );
    });
  };
  return <div className="timetables">{renderTimes(date)}</div>;
};

export default Timetable;
