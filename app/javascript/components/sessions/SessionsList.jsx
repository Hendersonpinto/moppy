import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

import { fetchSessions, cleanSessions } from "../../actions";

class SessionsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSessions(this.props.currentHost.id);
    // this.renderSessions();
  }

  componentWillUnmount() {
    this.props.cleanSessions();
  }

  renderSessions() {
    if (!this.props.sessions) {
      return <p>You do not have any session yet</p>;
    }

    console.log(this.props.sessions);
    return this.props.sessions.map((session) => {
      console.log(session);
      console.log(session.host);
      return (
        <ListGroupItem key={session.id}>
          <Link to={`/sessions/${session.id}`} className="header">
            <ListGroupItemHeading>{`Host: ${session.host.first_name}`}</ListGroupItemHeading>
          </Link>
          <ListGroupItemText>
            {`Cleaner: ${session.cleaner.first_name}`}
          </ListGroupItemText>
          <ListGroupItemText>
            {`Total hours: ${session.hours}`}
          </ListGroupItemText>
          <ListGroupItemText>{`Total size: ${session.size}`}</ListGroupItemText>
        </ListGroupItem>
      );
    });
  }

  render() {
    console.log(this.props);
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
      currentHost: state.hosts.current_host,
    };
  }
  return {
    currentHost: state.hosts.current_host,
  };
};

export default connect(mapStateToProps, { fetchSessions, cleanSessions })(
  SessionsIndex
);
