import React from "react";
import Routes from "../routes/Index";
import { connect } from "react-redux";

import { checkHost } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.checkHost();
  }

  render() {
    return <Routes />;
  }
}

const mapStateToProps = (state) => {
  return {
    current_host: state.hosts.current_host,
  };
};

export default connect(mapStateToProps, { checkHost })(App);
