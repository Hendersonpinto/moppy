import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchSessions, cleanSessions } from "../../actions";
import ConfirmedSessionCard from "./ConfirmedSessionCard";
import PendingCleaningCard from "./ConfirmedSessionCard";

const SessionsIndex = (props) => {
  const currentHost = useSelector((state) => state.hosts.current_host);
  const sessions = useSelector((state) =>
    state.sessions ? Object.values(state.sessions) : null
  );
  const pendingCleanings = useSelector((state) =>
    state.pending ? Object.values(state.pending) : null
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

  const renderPendingCleanings = () => {
    if (!pendingCleanings) {
      return <p>You do not have any pending cleaning</p>;
    }

    return pendingCleanings.map((pending) => {
      return <PendingCleaningCard session={pending} />;
    });
  };

  return (
    <>
      <div className="confirmed">
        <h3 className="content__title">Confirmed cleanings:</h3>
        <div className="confirmed-scrollable">
          <div className="confirmed-sessions">{renderSessions()}</div>
        </div>
      </div>
      <div className="pending">
        <h3 className="content__title">Pending cleanings:</h3>
        <div className="pending-Cleanings">{renderPendingCleanings()}</div>
      </div>
    </>
  );
};

export default SessionsIndex;
