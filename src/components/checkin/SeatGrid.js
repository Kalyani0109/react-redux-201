import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  makeStyles,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { EventSeatOutlined } from "@material-ui/icons";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  paper: {
    height: 50,
    width: 50,
  },
  icons: {
    margin: theme.spacing(1.5),
  },
}));

function SeatGrid({ passengerList }) {
  const classes = useStyles();

  const seat_num = {
    "01A": "action",
    "02A": "action",
    "03A": "action",
    "04A": "action",
    "05A": "action",
    "06A": "action",
    "07A": "action",
    "08A": "action",
    "09A": "action",
    "10A": "action",
    "11A": "action",
    "12A": "action",
    "13A": "action",
    "14A": "action",
    "15A": "action",
    "16A": "action",
    "17A": "action",
    "18A": "action",
  };

  const [filters, setFilters] = useState({
    checkedIn: false,
    wheelChair: false,
    infant: false,
  });

  const [seats, setSeats] = useState(JSON.parse(JSON.stringify(seat_num)));

  useEffect(() => {
    applyFilters();
  }, [passengerList, filters]);

  function handleFilterChange(event) {
    event.preventDefault();

    let newFilters = { ...filters };

    for (let property in newFilters) {
      if (property == event.target.name) {
        newFilters[event.target.name] = true;
      } else {
        newFilters[property] = false;
      }
    }
    setFilters({ ...newFilters });
  }

  function applyFilters() {
    let copy_seat_num = { ...seat_num };
    if (filters.checkedIn) {
      passengerList.forEach((passenger) => {
        if (passenger["checked_in"])
          copy_seat_num[passenger.seat_num] = "primary";
      });
    } else if (filters.wheelChair) {
      passengerList.forEach((passenger) => {
        if (passenger["wheel_chair"])
          copy_seat_num[passenger.seat_num] = "primary";
      });
    } else if (filters.infant) {
      passengerList.forEach((passenger) => {
        if (passenger["infant"]) copy_seat_num[passenger.seat_num] = "primary";
      });
    }
    setSeats({ ...copy_seat_num });
  }

  return (
    <>
      <>
        <FormControlLabel
          control={
            <Radio
              checked={filters.checkedIn}
              onChange={handleFilterChange}
              value="checkedIn"
              name="checkedIn"
            />
          }
          label="Checked In"
        ></FormControlLabel>

        <FormControlLabel
          control={
            <Radio
              checked={filters.wheelChair}
              onChange={handleFilterChange}
              value="wheelChair"
              name="wheelChair"
            />
          }
          label="Wheel Chair"
        ></FormControlLabel>

        <FormControlLabel
          control={
            <Radio
              checked={filters.infant}
              onChange={handleFilterChange}
              value="infant"
              name="infant"
            />
          }
          label="Infant"
        ></FormControlLabel>
      </>
      <Grid container className={classes.root} spacing={2} justify="center">
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid container justify="center" spacing={10}>
            <Grid item xs={6}>
              <Grid container justify="center">
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["01A"]}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["02A"]}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["03A"]}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="center">
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["04A"]}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["05A"]}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["06A"]}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid container justify="center" spacing={10}>
            <Grid item xs={6}>
              <Grid container justify="center">
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["07A"]}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["08A"]}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["09A"]}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="center">
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["10A"]}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["11A"]}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["12A"]}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid container justify="center" spacing={10}>
            <Grid item xs={6}>
              <Grid container justify="center">
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["13A"]}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["14A"]}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["15A"]}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="center">
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["16A"]}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["17A"]}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["18A"]}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}

SeatGrid.propTypes = {
  passengerList: PropTypes.array.isRequired,
};

export default SeatGrid;
