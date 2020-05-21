import React, { useState } from "react";
import TimeslotButton from "./TimeslotButton";
import { useDispatch, useSelector } from "react-redux";

import { pickTimeslot } from "../../actions";

export const roundToHour = (date) => {
  const p = 60 * 60 * 1000; // milliseconds in an hour
  return new Date(Math.ceil(date.getTime() / p) * p);
};

const Timetable = ({ date }) => {
  const activeHour = useSelector((state) => state.sessions.date.getHours());
  const dispatch = useDispatch();
  const renderTimes = (date) => {
    let now = new Date();
    const initialTime =
      date.getDate() === now.getDate()
        ? roundToHour(now)
        : new Date(now.setHours(8, 0));
    let list = [];
    for (let i = initialTime.getHours(); i <= 18; i++) {
      list.push(i);
    }

    const handleClick = (hour) => {
      console.log("Iam triggered", hour);
      dispatch(pickTimeslot(hour));
    };
    console.log(activeHour);
    return list.map((hour) => {
      return (
        <TimeslotButton
          hour={hour}
          handleClick={handleClick}
          activeHour={activeHour}
          key={hour}
        />
      );
    });
  };
  return <div className="timetables">{renderTimes(date)}</div>;
};

export default Timetable;

//            RENDER SLOTS WITH MINUTES FOR HALF AN HOUR 30
// return list.map((hour) => {
//   if (hour < 18) {
//     return (
//       <>
//         <TimeslotButton
//           hour={hour}
//           handleClick={handleClick}
//           activeHour={activeHour}
//           key={hour}
//         />
//         <TimeslotButton
//           hour={hour}
//           handleClick={handleClick}
//           activeHour={activeHour}
//           key={hour}
//         />
//       </>
//     );
//   }
//   return (
//     <TimeslotButton
//       hour={hour}
//       handleClick={handleClick}
//       activeHour={activeHour}
//       key={hour}
//     />
//   );
// });
