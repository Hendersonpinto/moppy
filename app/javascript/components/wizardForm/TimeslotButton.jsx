import React from "react";

const TimeslotButton = ({ hour, handleClick, activeHour }) => {
  return (
    <button
      type="button"
      className={`timeslot ${activeHour === hour && "is-active"}`}
      key={hour}
      onClick={() => handleClick(hour)}
    >
      <p>{`${hour}:00`}</p>
    </button>
  );
};

export default TimeslotButton;
