import React from "react";

function roundToHour(date) {
  const p = 60 * 60 * 1000; // milliseconds in an hour
  return new Date(Math.ceil(date.getTime() / p) * p);
}
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
  return list.map((number) => {
    return (
      <div className="timeslot" key={number}>
        <p>{`${number}:00`}</p>
      </div>
    );
  });
};

const Timetable = ({ date }) => {
  return <div className="timetables">{renderTimes(date)}</div>;
};

export default Timetable;
