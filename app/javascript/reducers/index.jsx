import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import sessionsReducer from "./sessionsReducer";
import hostsReducer from "./hostsReducer";

export default combineReducers({
  sessions: sessionsReducer,
  form: formReducer,
  hosts: hostsReducer,
});
