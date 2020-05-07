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
        <LogForm
          onSubmit={this.onSubmit}
          myerror={this.props.myerror}
        ></LogForm>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.hosts.error) {
    return {
      myerror: state.hosts.error,
    };
  }
  return { myerror: null };
};

export default connect(mapStateToProps, { logHost })(HostLog);
