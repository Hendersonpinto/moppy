import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { checkHost } from "../actions";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.checkHost();
  }

  render() {
    if (this.props.current_host) {
      return (
        <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
          <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="container secondary-color">
              <h1 className="display-4">Dashboard</h1>
              <p className="lead">
                This is the dashboard for {this.props.current_host.first_name}
              </p>
              <hr className="my-4" />
              <Link to="/sessions" className="btn btn-lg">
                View sessions
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return "Loading...";
  }
}

const mapStateToProps = (state, ownProps) => {
  console.dir("my props to dashboard");
  console.dir(ownProps);

  return {
    current_host: state.hosts.current_host,
  };
};

export default connect(mapStateToProps, { checkHost })(Dashboard);
