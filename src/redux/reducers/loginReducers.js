import initialState from "./initialState";
import * as types from "../actionTypes";

export default function logInReducers(state = initialState.user, actions) {
  switch (actions.type) {
    case types.LOGIN_SUCCESS:
      return actions.logInDetails;
    case types.LOGIN_ERROR:
      return actions.error;
    default:
      return state;
  }
}
