import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { activateButton } from "../../actions";
import { leftNavActions } from "./leftNavActions";

import Logo from "../../../assets/images/logop.svg";
import YogaBall from "../../../assets/images/yogaBall.svg";

const LeftNavBar = () => {
  const activeId = useSelector((state) => state.dom.activeId);
  const dispatch = useDispatch();
  const handleClick = (event, id) => {
    dispatch(activateButton(id));
  };
  const renderActions = (activeId) => {
    return leftNavActions(activeId).map((action) => {
      return (
        <div className="lnav__action" key={action.title}>
          <Link
            to={action.url}
            className={`lnav__link ${activeId === action.title && "is-active"}`}
            key={action.title}
            onClick={(e) => {
              handleClick(e, action.title);
            }}
          >
            {action.icon}
            <p>{action.title}</p>
          </Link>
          <div
            className={`lnav__bar ${activeId === action.title && "is-active"}`}
          ></div>
        </div>
      );
    });
  };
  return (
    <div className="lnav">
      <Link to="/" className="lnavBar__logo">
        <div className="logo">
          <img src={Logo} id="logo" alt="logo" />
        </div>
      </Link>
      <div className="lnav__actions">{renderActions(activeId)}</div>
      <div className="book">
        <Link to="/hosts/book">
          <div className="book-button">
            <div className="left">
              <div className="vertical"></div>
              <div className="horizontal"></div>
            </div>
            <div className="right">
              <p>Post a cleaning</p>
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
