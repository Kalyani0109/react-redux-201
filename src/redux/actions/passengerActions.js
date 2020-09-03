import * as passengerApi from "../../api/passengerApi";
import * as types from "../actionTypes";

export function LoadPassengerDetailsByFlightSuccess(
  passengerDetails,
  flight_no
) {
  return { type: types.LOAD_PASSENGER_DETAILS, passengerDetails, flight_no };
}
export function LoadPassengerDetailsByFlightError(error) {
  console.log("Error while fetching passenger details", error);
}

export function updatePassengerSuccess(passenger) {
  return { type: types.UPDATE_PASSENGER_DETAILS, passenger };
}

export function updatePassengerError(error) {
  console.log("Error while updating passenger details", error);
}

export function loadPassengerDetailsByFlight(flight_no) {
  return function (dispatch) {
    return passengerApi
      .getPassengerDetails()
      .then((response) => {
        dispatch(LoadPassengerDetailsByFlightSuccess(response, flight_no));
      })
      .catch((err) => {
        dispatch(LoadPassengerDetailsByFlightError(err));
        throw err;
      });
  };
}
export function updatePassengerDetails(passenger) {
  return function (dispatch) {
    return passengerApi
      .updatePassenger(passenger)
      .then((response) => {
        dispatch(updatePassengerSuccess(response));
      })
      .catch((err) => {
        dispatch(updatePassengerError(err));
        throw err;
      });
  };
}
