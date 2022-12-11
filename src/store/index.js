import { combineReducers } from "redux";
import { adminReducer } from "./admin";
import { userReducer } from "./user";

export const reducer = combineReducers({
  adminReducer,
  userReducer,
});