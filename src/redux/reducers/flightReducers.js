import initialState from "./initialState";
import * as types from "../actionTypes";

export default function flightReducer(
  state = initialState.flightDetails,
  actions
) {
  switch (actions.type) {
    case types.LOAD_FLIGHT_DETAILS:
      return actions.flightDetails;
    default:
      return state;
  }
}
