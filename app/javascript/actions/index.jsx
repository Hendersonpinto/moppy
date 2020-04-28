import sessionsAxios from "../api/sessionsAxios";

import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_SESSION,
  FETCH_SESSIONS,
  UPDATE_SESSION,
  DELETE_SESSION,
  FETCH_SESSION,
  CHECK_HOST,
  HOST_LOGIN,
  HOST_LOGOUT,
  HOST_CREATE,
} from "./types";
import deviseHostsAxios from "../api/deviseHostsAxios";

export const fetchSessions = () => {
  return async (dispatch) => {
    const response = await sessionsAxios.get("/api/v1/cleaning_sessions/index");
    dispatch({ type: FETCH_SESSIONS, payload: response.data });
  };
};

export const checkHost = () => {
  return async (dispatch) => {
    const response = await deviseHostsAxios
      .get("/check_host")
      .catch(function (error) {
        console.log(error);
      });
    console.dir(response);
    dispatch({ type: CHECK_HOST, payload: response.data });
  };
};

export const createHost = (formValues) => {
  console.log("creating a host");
  return async (dispatch, getState) => {
    const response = await deviseHostsAxios
      .post("/", {
        host: { ...formValues },
      })
      .catch(function (error) {
        console.log(error);
      });
    console.dir(response);
    dispatch({ type: HOST_CREATE, payload: response.data });
    // Here is where we force our user with programmatic navitagion
    history.push("/");
  };
};

export const logHost = (formValues) => {
  return async (dispatch, getState) => {
    const response = await deviseHostsAxios
      .post("/sign_in", {
        host: { ...formValues },
      })
      .catch(function (error) {
        console.log(error);
      });
    console.dir(response);
    dispatch({ type: HOST_LOGIN, payload: response.data });
    // Here is where we force our user with programmatic navitagion
    history.push("/");
  };
};

export const logoutHost = (hostId) => {
  console.dir("ESTE FUE MI ID");
  console.dir(hostId);
  return async (dispatch) => {
    const response = await deviseHostsAxios
      .delete("/sign_out", {
        host: { id: hostId },
      })
      .catch(function (error) {
        console.log(error);
      });
    dispatch({ type: HOST_LOGOUT });
    history.push("/");
  };
};
