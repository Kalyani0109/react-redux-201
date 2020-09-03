import React, { useState } from "react";
import { makeStyles, InputLabel, Select, Button } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyle = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  select: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
}));

function SelectFlight({ flightDetails, flightNumSubmit, title }) {
  const classes = useStyle();

  const [flightNum, setFlightNum] = useState("");
  const handleFlightNumChange = (event) => {
    setFlightNum(event.target.value);
  };
  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={(event) => flightNumSubmit(event, flightNum)}>
        <InputLabel id="flight_num_lbl">Flight Number</InputLabel>
        <Select
          native
          labelId="flight_num_lbl"
          id="flight_num"
          value={flightNum}
          onChange={handleFlightNumChange}
          className={classes.select}
        >
          <option value="" />
          {flightDetails.map((flight) => (
            <option value={flight.flight_no} key={flight.flight_no}>
              {flight.flight_no}
            </option>
          ))}
        </Select>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          type="submit"
        >
          search
        </Button>
      </form>
    </>
  );
}

SelectFlight.propTypes = {
  title: PropTypes.string.isRequired,
  flightDetails: PropTypes.array.isRequired,
  flightNumSubmit: PropTypes.func.isRequired,
};

export default SelectFlight;
