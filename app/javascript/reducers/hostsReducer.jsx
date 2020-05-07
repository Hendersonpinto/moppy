import _ from "lodash";

import { CHECK_HOST, HOST_LOGIN, HOST_LOGOUT } from "../actions/types";
import { HOST_CREATE } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: false,
  current_host: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECK_HOST:
      console.log(action.payload);
      if (action.payload.success) {
        if (action.payload.data) {
          return {
            ...state,
            current_host: action.payload.data,
            isSignedIn: true,
          };
        }
        return { ...state, current_host: null, isSignedIn: false };
      }
      return { ...state, current_host: null, error: action.payload.error };
    case HOST_CREATE:
      if (action.payload.success) {
        return { ...state, ...action.payload.data };
      }
      return { ...state, current_host: null, error: action.payload.error };
    case HOST_LOGIN:
      if (action.payload.success) {
        return { ...state, current_host: action.payload.data };
      }
      return { ...state, current_host: null, error: action.payload.error };

    case HOST_LOGOUT:
      return { ...state, current_host: null, isSignedIn: false };
    default:
      return state;
  }
};
