import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

import { fetchAllSessions } from "../../actions";
import { cleanSessions } from "../../actions";

class SessionsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllSessions();
    this.renderSessions();
  }

  componentWillUnmount() {
    this.props.cleanSessions();
  }
  renderSessions() {
    if (!this.props.sessions) {
      return <p>Loading...</p>;
    }
    return this.props.sessions.map((session) => {
      return (
        <ListGroupItem key={session.id}>
          <Link to={`/sessions/${session.id}`} className="header">
            <ListGroupItemHeading>{`Host: ${session.host.first_name}`}</ListGroupItemHeading>
          </Link>
          <ListGroupItemText>
            {`Cleaner: ${session.cleaner.first_name}`}
          </ListGroupItemText>
          <ListGroupItemText>
            {`Total hours: ${session.duration}`}
          </ListGroupItemText>
          <ListGroupItemText>{`Total size: ${session.size}`}</ListGroupItemText>
        </ListGroupItem>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Sessions</h2>
        <ListGroup>{this.renderSessions()}</ListGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.sessions) {
    return {
      sessions: Object.values(state.sessions),
    };
  }
  return {
    sessions: null,
  };
};

export default connect(mapStateToProps, { fetchAllSessions, cleanSessions })(
  SessionsIndex
);
