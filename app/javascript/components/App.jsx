import React, { useEffect } from "react";
import Routes from "../routes/Index";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { checkHost, updateResolution } from "../actions";

const App = () => {
  const current_host = useSelector((state) => state.hosts.current_host);

  const resolution = window.innerWidth;
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("resize", () => {
      let resolution = window.innerWidth;
      dispatch(updateResolution(resolution));
    });
    dispatch(updateResolution(resolution));
    dispatch(checkHost());
  }, []);
  return <Routes currentHost={current_host} />;
};

export default App;
