import React from "react";
import { connect } from "react-redux";
import { createHost } from "../../actions/index";
import MoppyForm from "../MoppyForm";

class HostCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createHost(formValues);
  };

  render() {
    return (
      <div className="container">
        <h3>Create a Host</h3>
        <MoppyForm onSubmit={this.onSubmit}></MoppyForm>
      </div>
    );
  }
}

export default connect(null, { createHost })(HostCreate);
