import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

import { fetchSessions } from "../../actions";

class SessionsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSessions();
    this.renderSessions();
  }

  renderSessions() {
    if (this.props.sessions.length < 1) {
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
            {`Total hours: ${session.hours}`}
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
  return {
    sessions: Object.values(state.sessions),
  };
};

export default connect(mapStateToProps, { fetchSessions })(SessionsIndex);
