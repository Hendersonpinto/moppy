import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import sessionsReducer from "./sessionsReducer";

export default combineReducers({
  sessions: sessionsReducer,
  form: formReducer,
});
