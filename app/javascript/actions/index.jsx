import sessionsAxios from "../api/sessionsAxios";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_SESSION,
  FETCH_SESSIONS,
  UPDATE_SESSION,
  DELETE_SESSION,
  FETCH_SESSION,
} from "./types";

export const fetchSessions = () => {
  return async (dispatch) => {
    const response = await sessionsAxios.get("/api/v1/cleaning_sessions/index");
    dispatch({ type: FETCH_SESSIONS, payload: response.data });
  };
};
