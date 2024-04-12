import { combineReducers } from "redux";
import { songReducer } from "./songReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  songReducer: songReducer,
  auth: authReducer,
});

export default rootReducer;
