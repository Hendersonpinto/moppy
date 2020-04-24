import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

import { fetchSessions } from "../actions";

class SessionsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSessions();
    this.renderSessions();
  }

  renderSessions() {
    return this.props.sessions.map((session) => {
      return (
        <ListGroupItem>
          <Link to={`/sessions/${session.id}`} className="header">
            <ListGroupItemHeading>{`Total Price: ${session.total_price}`}</ListGroupItemHeading>
          </Link>
          <ListGroupItemText>
            {`Total hours ${session.hours}`}
          </ListGroupItemText>
          <ListGroupItemText>{`Total size ${session.size}`}</ListGroupItemText>
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
