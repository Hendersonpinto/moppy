import React from "react";
import { connect } from "react-redux";
import { logHost } from "../../actions/index";
import LogForm from "../LogForm";

class HostLog extends React.Component {
  onSubmit = (formValues) => {
    this.props.logHost(formValues);
  };

  render() {
    return (
      <div className="container">
        <h3>Log a Host</h3>
        <LogForm onSubmit={this.onSubmit}></LogForm>
      </div>
    );
  }
}

export default connect(null, { logHost })(HostLog);
