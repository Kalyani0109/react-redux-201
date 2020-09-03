import { combineReducers } from "redux";
import flightDetails from "./flightReducers";
import passengerDetails from "./passengerReducers";
import user from "./loginReducers";

const rootReducer = combineReducers({
  flightDetails,
  passengerDetails,
  user,
});

export default rootReducer;
