import React, { useEffect } from "react";
import Routes from "../routes/Index";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { checkHost } from "../actions";

const App = () => {
  const current_host = useSelector((state) => state.hosts.current_host);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkHost());
  }, []);

  console.log(current_host);
  return <Routes currentHost={current_host} />;
};

export default App;
