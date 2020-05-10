import { UPDATE_RESOLUTION, ACTIVATE_BUTTON } from "../actions/types";

const INITIAL_STATE = {
  isMobile: false,
  activeId: "overview",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_RESOLUTION:
      return {
        ...state,
        isMobile: action.payload,
      };
    case ACTIVATE_BUTTON:
      return {
        ...state,
        activeId: action.payload,
      };
    default:
      return state;
  }
};
