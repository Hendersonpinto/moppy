import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

import { fetchSessions, cleanSessions } from "../../actions";

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
      return (
        <ListGroupItem key={session.id}>
          <Link to={`/sessions/${session.id}`} className="header">
            <ListGroupItemHeading>{`Host: ${currentHost.first_name}`}</ListGroupItemHeading>
          </Link>
          <ListGroupItemText>
            {`Cleaner: ${session.cleaner.first_name}`}
          </ListGroupItemText>
          <ListGroupItemText>{`Total hours: ${session.hours}`}</ListGroupItemText>
          <ListGroupItemText>{`Total size: ${session.size}`}</ListGroupItemText>
        </ListGroupItem>
      );
    });
  };

  return (
    <div>
      <h2>Sessions</h2>
      <ListGroup>{renderSessions(sessions)}</ListGroup>
    </div>
  );
};

export default SessionsIndex;
