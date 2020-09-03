import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Card,
  CardContent,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";

function FlightDetails({ flight }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography> Flight Details </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Card style={{ alignSelf: "center" }}>
          <CardContent>
            <Typography color="primary" gutterBottom>
              {" "}
              Flight Number: {flight.flight_no}{" "}
            </Typography>
            <Typography color="primary" gutterBottom>
              {" "}
              Origin Airport: {flight.origin_station}{" "}
            </Typography>
            <Typography color="primary" gutterBottom>
              {" "}
              Departure Time: {flight.departure_time}{" "}
            </Typography>
            <Typography color="primary" gutterBottom>
              {" "}
              Journey Time: {flight.journey_time.hours}.
              {flight.journey_time.minutes} hrs{" "}
            </Typography>
            <Typography color="primary" gutterBottom>
              {" "}
              Destination Airport: {flight.destination_station}{" "}
            </Typography>
            <Typography color="primary" gutterBottom>
              {" "}
              Arrival Time: {flight.arrival_time} hrs{" "}
            </Typography>
          </CardContent>
        </Card>
      </AccordionDetails>
    </Accordion>
  );
}

FlightDetails.propTypes = {
  flight: PropTypes.object.isRequired,
};

export default FlightDetails;
