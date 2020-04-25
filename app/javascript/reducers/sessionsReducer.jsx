import _ from "lodash";

import {
  CREATE_SESSION,
  FETCH_SESSIONS,
  UPDATE_SESSION,
  DELETE_SESSION,
  FETCH_SESSION,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SESSIONS:
      // return { ...state, ..._.mapKeys(action.payload, "id") };
      // I have done the transformation above, in ruby instead.
      return { ...state, ...action.payload };
    case FETCH_SESSION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SESSION:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_SESSION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SESSION:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
