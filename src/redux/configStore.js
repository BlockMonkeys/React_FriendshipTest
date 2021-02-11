import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import quiz from "./modules/quiz";
import result from "./modules/result";
import loaded from "./modules/loaded";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ quiz, result, loaded });
const store = createStore(rootReducer, enhancer);

export default store;