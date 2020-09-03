import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import initialState from "./reducers/initialState";
import thunk from "redux-thunk";

export default function ConfigStore() {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
