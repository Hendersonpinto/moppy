import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CalendarCard from "./CalendarCard";
import AddressCard from "./AddressCard";
import { logoutHost } from "../../actions";

import Avatar from "../../../assets/images/susan.svg";
import BellIcon from "../../../assets/images/bellIcon.svg";
import LogOutIcon from "../../../assets/images/logoutIcon.svg";

const RightNavBar = () => {
  const currentHost = useSelector((state) => state.hosts.current_host);
  const dispatch = useDispatch();

  return (
    <div className="rnav">
      <div className="rnav__heading">
        <img src={BellIcon} alt="notifications" />
        <div
          className="rnav__logout"
          onClick={() => {
            dispatch(logoutHost(currentHost.id));
          }}
        >
          <span>Logout</span> <img src={LogOutIcon} alt="logout"></img>
        </div>
      </div>
      <div className="rnav__contact">
        <img src={Avatar} alt="profileimage" />
        <h3> {currentHost.first_name}</h3>
        <p> {currentHost.email}</p>
      </div>
      <div className="rnav__address">
        <h4>My home</h4>
        <AddressCard owner={currentHost} />
      </div>
      <div className="rnav__calendar">
        <h4>Upcoming cleanings</h4>
        <CalendarCard />
      </div>
    </div>
  );
};

{
  /* <button
className="lnav__action "
onClick={() => {
  dispatch(fetchSessions(currentHostId));
}}
>
Sessions
</button> */
}
export default withRouter(RightNavBar);
