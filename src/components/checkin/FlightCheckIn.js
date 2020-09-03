import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as flightAction from "../../redux/actions/flightActions";
import * as passengerAction from "../../redux/actions/passengerActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import PassengerList from "./passengerList/PassengerList";
import FlightDetails from "./FlightDetails";
import SeatGrid from "./SeatGrid";
import SelectFlight from "../common/SelectFlight";

export function FlightCheckIn({
  flightDetails,
  passengerDetails,
  flightAction,
  passengerAction,
  title,
}) {
  useEffect(() => {
    flightAction.loadFlightDetails().catch((err) => {
      console.log("Flight Details Loading Error", err);
    });
  }, []);

  const handleDetailsChange = (event, passenger) => {
    event.preventDefault();
    let updatedPassenger = {
      ...passenger,
    };
    console.log("Updated Passenger", updatedPassenger);
    passengerAction.updatePassengerDetails(updatedPassenger).catch((err) => {
      console.log("Update Passenger Failed", err);
    });
  };

  const flightNumSubmit = (event, flightNum) => {
    event.preventDefault();
    passengerAction.loadPassengerDetailsByFlight(flightNum).catch((err) => {
      console.log("Loading Passenger Details Failed", err);
    });
  };

  return (
    <div className="jumbotron">
      <SelectFlight
        flightDetails={flightDetails}
        flightNumSubmit={flightNumSubmit}
        title={title}
      />
      {passengerDetails.length === 0 ? (
        ""
      ) : (
        <>
          <FlightDetails
            flight={
              flightDetails.filter(
                (flight) => passengerDetails[0].flight_no === flight.flight_no
              )[0]
            }
          />
          <PassengerList
            passengerList={passengerDetails}
            onSave={handleDetailsChange}
          />
          <SeatGrid passengerList={passengerDetails} />
        </>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    flightDetails: state.flightDetails,
    passengerDetails: state.passengerDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    flightAction: bindActionCreators(flightAction, dispatch),
    passengerAction: bindActionCreators(passengerAction, dispatch),
  };
}

FlightCheckIn.propTypes = {
  title: PropTypes.string.isRequired,
  flightDetails: PropTypes.array.isRequired,
  passengerDetails: PropTypes.array.isRequired,
  flightAction: PropTypes.object.isRequired,
  passengerAction: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightCheckIn);
