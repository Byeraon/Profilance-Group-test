import { createStore, combineReducers } from "redux";
import { systemReducer, userReducer } from "./reducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  systemReducer: systemReducer,
});

export const store = createStore(rootReducer);
