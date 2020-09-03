import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as flightAction from "../../redux/actions/flightActions";
import * as passengerAction from "../../redux/actions/passengerActions";
import SelectFlight from "../common/SelectFlight";
import PropTypes from "prop-types";
import MealGrid from "./MealGrid";

function InFlight({
  flightDetails,
  passengerDetails,
  flightAction,
  passengerAction,
}) {
  useEffect(() => {
    if (flightDetails.length === 0) {
      flightAction.loadFlightDetails().catch((err) => {
        console.log("Flight Details Loading Error", err);
      });
    }
  }, []);

  const saveUpdateService = (event, passenger) => {
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
    <>
      <div className="jumbotron">
        <SelectFlight
          flightDetails={flightDetails}
          flightNumSubmit={flightNumSubmit}
          title="In Flight Details"
        />
        {passengerDetails.length === 0 ? null : (
          <MealGrid
            passengerDetails={passengerDetails}
            saveService={saveUpdateService}
          />
        )}
      </div>
    </>
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

InFlight.propTypes = {
  flightDetails: PropTypes.array.isRequired,
  passengerDetails: PropTypes.array.isRequired,
  flightAction: PropTypes.object.isRequired,
  passengerAction: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(InFlight);
