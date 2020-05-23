import React from "react";

const week = [
  {
    day: "Mo",
    date: 18,
    status: "free",
  },
  {
    day: "Tu",
    date: 19,
    status: "free",
  },
  {
    day: "We",
    date: 20,
    status: "free",
  },
  {
    day: "Th",
    date: 21,
    status: "booked",
  },
  {
    day: "Fr",
    date: 22,
    status: "free",
  },
  {
    day: "Sa",
    date: 23,
    status: "booked",
  },
  {
    day: "Su",
    date: 24,
    status: "free",
  },
];

const renderDays = () => {
  return week.map((day) => {
    return (
      <div className={`daygroup ${day.status}`} key={day.date}>
        <p className="day">{day.day}</p>
        <p>{day.date}</p>
      </div>
    );
  });
};

const CalendarCard = () => {
  return (
    <div className="calendar-card" style={{ display: "flex" }}>
      {renderDays()}
    </div>
  );
};

export default CalendarCard;
