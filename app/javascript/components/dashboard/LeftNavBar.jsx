import React from "react";
import { Link, withRouter } from "react-router-dom";

import { leftNavActions } from "./leftNavActions";

import Logo from "../../../assets/images/logop.svg";
import YogaBall from "../../../assets/images/yogaBall.svg";

const renderActions = () => {
  return leftNavActions.map((action) => {
    return (
      <div className="lnav__action" key={action.title}>
        <img src={action.icon} alt={action.title}></img>
        <Link to={action.url} className={`lnav__action ${action.title}`}>
          {action.title}
        </Link>
      </div>
    );
  });
};

const LeftNavBar = () => {
  return (
    <div className="lnav">
      <Link to="/" className="lnavBar__logo">
        <div className="logo">
          <img src={Logo} id="logo" alt="logo" />
        </div>
      </Link>
      <div className="lnav__actions">{renderActions()}</div>
      <div className="book">
        <Link to="/hosts/book">
          <div className="book-button">
            <div className="left">
              <div className="vertical"></div>
              <div className="horizontal"></div>
            </div>
            <div className="right">
              <p>Book a cleaner</p>
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
