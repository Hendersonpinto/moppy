import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSessions } from "../actions";

class LeftNavBar extends React.Component {
  render() {
    return (
      <div className="lnav">
        <button
          className="lnav__action "
          onClick={() => {
            console.dir("ID PASADO");
            console.dir(this.props.currentHostId);
            this.props.fetchSessions(this.props.currentHostId);
          }}
        >
          Sessions
        </button>

        <Link to="/hosts/profile" className="lnav__action">
          Profile
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentHostId: state.hosts.current_host.id,
  };
};

export default connect(mapStateToProps, { fetchSessions })(
  withRouter(LeftNavBar)
);
