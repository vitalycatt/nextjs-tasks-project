import { tasksReducer } from "./tasks";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  tasks: tasksReducer,
});
