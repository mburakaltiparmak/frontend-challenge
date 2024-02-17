import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers/reducers";

export const store = createStore(reducer, applyMiddleware(logger));
