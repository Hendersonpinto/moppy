import _ from "lodash";

import { CHECK_HOST, HOST_LOGIN, HOST_LOGOUT } from "../actions/types";
import { HOST_CREATE } from "../actions/types";

// const INITIAL_STATE = {
//   isSignedIn: null,
//   currentUserId: null,
// };

export default (state = {}, action) => {
  switch (action.type) {
    case CHECK_HOST:
      return { ...state, current_host: action.payload };
    case HOST_CREATE:
      return { ...state, ...action.payload };
    case HOST_LOGIN:
      return { ...state, current_host: action.payload };
    case HOST_LOGOUT:
      return { ...state, current_host: null };
    default:
      return state;
  }
};
