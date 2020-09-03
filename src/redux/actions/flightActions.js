import * as flightApi from "../../api/flightApi";
import * as types from "../actionTypes";

export function LoadFlightDetailsSuccess(flightDetails) {
  return { type: types.LOAD_FLIGHT_DETAILS, flightDetails };
}
export function LoadFlightDetailsError(error) {
  console.log("Error while fetching file details", error);
}

export function loadFlightDetails() {
  return function (dispatch) {
    return flightApi
      .getFlightDetails()
      .then((response) => {
        dispatch(LoadFlightDetailsSuccess(response));
      })
      .catch((err) => {
        dispatch(LoadFlightDetailsError(err));
        throw err;
      });
  };
}
