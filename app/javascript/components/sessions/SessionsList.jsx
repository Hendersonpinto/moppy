import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchSessions, cleanSessions } from "../../actions";
import ConfirmedSessionCard from "./ConfirmedSessionCard";

const SessionsIndex = (props) => {
  const currentHost = useSelector((state) => state.hosts.current_host);
  const sessions = useSelector((state) =>
    state.sessions ? Object.values(state.sessions) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSessions(currentHost.id));
    return () => {
      dispatch(cleanSessions());
    };
  }, []);

  const renderSessions = () => {
    if (!sessions) {
      return <p>You do not have any session yet</p>;
    }

    return sessions.map((session) => {
      return <ConfirmedSessionCard session={session} />;
    });
  };

  return (
    <div>
      <h2>Sessions</h2>
      <div className="confirmed-sessions">{renderSessions()}</div>
    </div>
  );
};

export default SessionsIndex;
