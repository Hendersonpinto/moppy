import history from "../packs/history";
import deviseHostsAxios from "../api/deviseHostsAxios";
import sessionsAxios from "../api/sessionsAxios";
import axios from "axios";

import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_CLEANING,
  FETCH_ALL_SESSIONS,
  FETCH_SESSIONS,
  CLEAN_SESSIONS,
  UPDATE_SESSION,
  DELETE_CLEANING,
  FETCH_SESSION,
  CHECK_HOST,
  HOST_LOGIN,
  HOST_LOGOUT,
  HOST_CREATE,
  UPDATE_RESOLUTION,
  ACTIVATE_BUTTON,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  UPDATE_PAGE,
  PICK_DATE,
  PICK_TIMESLOT,
} from "./types";

export const pickDate = (newDate) => {
  return { type: PICK_DATE, payload: newDate };
};
export const pickTimeslot = (newTimeslot) => {
  return { type: PICK_TIMESLOT, payload: newTimeslot };
};

export const createCleaning = () => {};

export const changePageAction = (change) => {
  return { type: UPDATE_PAGE, payload: change };
};

export const deleteCleaning = (cleaningId) => {
  return async (dispatch) => {
    const response = await sessionsAxios.delete(
      "/api/v1/cleaning_sessions/destroy",
      { params: { session: { session_id: cleaningId } } }
    );
    console.log("I DELETED A RECORD");
    console.log(response);
    dispatch({
      type: DELETE_CLEANING,
      payload: { status: response.status, id: response.data.id },
    });
  };
};

export const activateButton = (elementId) => {
  return { type: ACTIVATE_BUTTON, payload: elementId };
};
export const updateResolution = (resolution) => {
  const isMobile = resolution < 600;
  return { type: UPDATE_RESOLUTION, payload: isMobile };
};
export const cleanSessions = () => {
  return { type: CLEAN_SESSIONS };
};
export const fetchAllSessions = () => {
  return async (dispatch) => {
    const response = await sessionsAxios.get(
      "/api/v1/cleaning_sessions/all_sessions"
    );
    dispatch({ type: FETCH_ALL_SESSIONS, payload: response.data });
  };
};

export const fetchSessions = (id) => {
  return async (dispatch) => {
    const response = await sessionsAxios.get(
      `/api/v1/cleaning_sessions/index`,
      { params: { host: { host_id: id } } }
    );
    console.log(
      "response from rails when fetchin sessions for a host",
      response
    );
    dispatch({ type: FETCH_SESSIONS, payload: response.data });
  };
};

export const checkHost = () => {
  return async (dispatch) => {
    const response = await deviseHostsAxios
      .get("/check_host")
      .then((response) => {
        dispatch({
          type: CHECK_HOST,
          payload: {
            statusText: response.statusText,
            status: response.status,
            success: true,
            data: response.data,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: CHECK_HOST,
          payload: {
            statusText: error.response.statusText,
            status: error.response.status,
            success: false,
            error: error.response.data.error,
          },
        });
      });
  };
};

export const createHost = (formValues) => {
  return async (dispatch, getState) => {
    const response = await deviseHostsAxios
      .post("/", {
        host: { ...formValues },
      })
      .then((response) => {
        dispatch({
          type: HOST_CREATE,
          payload: {
            statusText: response.statusText,
            status: response.status,
            success: true,
            data: response.data,
          },
        });
        // Here is where we force our user with programmatic navitagion
        history.push("/");
      })
      .catch(function (error) {
        dispatch({
          type: HOST_CREATE,
          payload: {
            statusText: error.response.statusText,
            status: error.response.status,
            success: false,
            error: error.response.data.error,
          },
        });
      });
  };
};

export const logHost = (formValues) => {
  return async (dispatch, getState) => {
    const response = await deviseHostsAxios
      .post("/sign_in", {
        host: { ...formValues },
      })
      .then((response) => {
        dispatch({
          type: HOST_LOGIN,
          payload: {
            statusText: response.statusText,
            status: response.status,
            success: true,
            data: response.data,
          },
        });
        // Here is where we force our user with programmatic navitagion
        history.push(`/hosts`);
      })
      .catch(function (error) {
        dispatch({
          type: HOST_LOGIN,
          payload: {
            statusText: error.response.statusText,
            status: error.response.status,
            success: false,
            error: error.response.data.error,
          },
        });
      });
  };
};

export const logoutHost = (hostId) => {
  return async (dispatch) => {
    const response = await deviseHostsAxios
      .delete("/sign_out", {
        host: { id: hostId },
      })
      .catch(function (error) {});
    dispatch({ type: HOST_LOGOUT });
    history.push("/");
  };
};
