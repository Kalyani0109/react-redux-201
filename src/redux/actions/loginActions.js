import * as types from "../actionTypes";
import * as LogInAuth from "../../api/loginApi";

export function logInApiSuccess(logInDetails) {
  return { type: types.LOGIN_SUCCESS, logInDetails };
}

export function LogInApiError(error) {
  return { type: types.LOGIN_ERROR, error };
}

export function logInAuth(user) {
  return function (dispatch) {
    return LogInAuth.checkLogInDetails(user)
      .then((response) => {
        dispatch(logInApiSuccess(response));
      })
      .catch((err) => {
        dispatch(LogInApiError({ error: err }));
      });
  };
}

export function getLogInDetails() {
  return function (dispatch) {
    return LogInAuth.getLogInDetails()
      .then((response) => {
        if (response) dispatch(logInApiSuccess(response.user));
      })
      .catch((err) => {
        dispatch(LogInApiError(err));
      });
  };
}
