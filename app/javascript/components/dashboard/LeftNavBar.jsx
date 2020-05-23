import React from "react";
import { Link, withRouter } from "react-router-dom";

import { leftNavActions } from "./leftNavActions";

import Logo from "../../../assets/images/logop.svg";
import YogaBall from "../../../assets/images/yogaBall.svg";

const LeftNavBar = (props) => {
  const currentPath = props.location.pathname;

  const renderActions = (currentPath) => {
    return leftNavActions(currentPath).map((action) => {
      return (
        <div className="lnav__action" key={action.title}>
          <Link
            to={action.url}
            className={`lnav__link ${
              currentPath === action.url && "is-active"
            }`}
            key={action.title}
          >
            {action.icon}
            <p>{action.title}</p>
          </Link>
          <div
            className={`lnav__bar ${currentPath === action.url && "is-active"}`}
          ></div>
        </div>
      );
    });
  };

  console.log("Props in left navbar", props);
  return (
    <div className="lnav">
      <Link to="/" className="lnavBar__logo">
        <div className="logo">
          <img src={Logo} id="logo" alt="logo" />
        </div>
      </Link>
      <div className="lnav__actions">{renderActions(currentPath)}</div>
      <div className="book">
        <Link to="/hosts/book">
          <div className="book-button">
            <div className="left">
              <div className="vertical"></div>
              <div className="horizontal"></div>
            </div>
            <div className="right">
              <p>New cleaning</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="yogaBall">
        <img src={YogaBall} id="yogaBall" alt="yogaBall" />
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
export default withRouter(LeftNavBar);
