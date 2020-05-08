import { UPDATE_RESOLUTION } from "../actions/types";

const INITIAL_STATE = {
  isMobile: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_RESOLUTION:
      return {
        ...state,
        isMobile: action.payload,
      };
    default:
      return state;
  }
};
