import _ from "lodash";

import {
  CREATE_SESSION,
  FETCH_SESSIONS,
  CLEAN_SESSIONS,
  FETCH_ALL_SESSIONS,
  UPDATE_SESSION,
  DELETE_SESSION,
  FETCH_SESSION,
} from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_ALL_SESSIONS:
      if (action.payload.length < 1) {
        return { ...state };
      }
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_SESSIONS:
      if (action.payload.length < 1) {
        return { ...state };
      }
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_SESSION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SESSION:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_SESSION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SESSION:
      return _.omit(state, action.payload);
    case CLEAN_SESSIONS:
      return null;
    default:
      return state;
  }
};
