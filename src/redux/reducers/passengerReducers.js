import initialState from "./initialState";
import * as types from "../actionTypes";

export default function passengerReducer(
  state = initialState.passengerDetails,
  actions
) {
  switch (actions.type) {
    case types.LOAD_PASSENGER_DETAILS:
      return actions.passengerDetails.filter(
        (passenger) => passenger.flight_no === actions.flight_no
      );
    case types.UPDATE_PASSENGER_DETAILS:
      return state.map((passenger) =>
        passenger.id === actions.passenger.id ? actions.passenger : passenger
      );
    default:
      return state;
  }
}
