import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { messageReducer } from "./containerMessage/reducer";

const store = createStore(
  combineReducers({ messageReducer }),
  applyMiddleware(logger)
);

export default store;
