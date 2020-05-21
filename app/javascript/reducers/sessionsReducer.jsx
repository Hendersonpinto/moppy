import _ from "lodash";

import {
  FETCH_SESSIONS,
  CLEAN_SESSIONS,
  FETCH_ALL_SESSIONS,
  UPDATE_SESSION,
  DELETE_CLEANING,
  FETCH_SESSION,
  UPDATE_PAGE,
  CREATE_CLEANING,
  PICK_DATE,
  PICK_TIMESLOT,
} from "../actions/types";

const INITIAL_STATE = {
  confirmed: {},
  unconfirmed: {},
  past: {},
  page: 1,
  date: new Date(),
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_SESSIONS:
      if (action.payload.length < 1) {
        return { ...state };
      }
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_SESSIONS:
      // console.log(action.payload);
      // console.log(_.mapKeys(action.payload, "id"));
      if (action.payload.length < 1) {
        return { ...state };
      }
      return {
        ...state,
        confirmed: _.mapKeys(action.payload.confirmed, "id"),
        unconfirmed: _.mapKeys(action.payload.unconfirmed, "id"),
      };
    case FETCH_SESSION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_CLEANING:
      console.log(
        "I AM CALLING FROM REDUCER AFTER SUCCESSFULLY TRIGGER CREATE_CLEANING ACTION"
      );
    // return { ...state, [action.payload.id]: action.payload };
    case UPDATE_SESSION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_CLEANING:
      if (action.payload.status === 200) {
        const {
          [action.payload.id]: whatever,
          ...filteredObject
        } = state.unconfirmed;
        console.log(filteredObject);
        return {
          ...state,
          unconfirmed: filteredObject,
        };
      }
      return { ...state, error: "Something happened in our servers" };
    case UPDATE_PAGE:
      return { ...state, page: state.page + action.payload };
    case CLEAN_SESSIONS:
      return { ...state, confirmed: {}, unconfirmed: {}, past: {} };
    case PICK_DATE:
      return { ...state, date: action.payload };
    case PICK_TIMESLOT:
      const newDate = new Date(
        state.date.getFullYear(),
        state.date.getMonth(),
        state.date.getDate(),
        action.payload
      );
      console.log(newDate);
      return { ...state, date: newDate };
    default:
      return state;
  }
};
