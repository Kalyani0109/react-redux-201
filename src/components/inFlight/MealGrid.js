import React, { useState, useEffect } from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import { EventSeatOutlined } from "@material-ui/icons";
import UpdateService from "./UpdateService";
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

function MealGrid({ passengerDetails, saveService }) {
  const classes = useStyles();

  const seat_num = {
    "01A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("01A"),
    },
    "02A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("02A"),
    },
    "03A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("03A"),
    },
    "04A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("04A"),
    },
    "05A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("05A"),
    },
    "06A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("06A"),
    },
    "07A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("07A"),
    },
    "08A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("08A"),
    },
    "09A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("09A"),
    },
    "10A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("10A"),
    },
    "11A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("11A"),
    },
    "12A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("12A"),
    },
    "13A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("13A"),
    },
    "14A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("14A"),
    },
    "15A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("15A"),
    },
    "16A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("16A"),
    },
    "17A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("17A"),
    },
    "18A": {
      color: "action",
      updateService: false,
      passenger: getpassenger("18A"),
    },
  };
  useEffect(() => {
    applyFilters();
  }, [passengerDetails]);
  const [seats, setSeats] = useState({ ...seat_num });

  const applyFilters = () => {
    let copy_seat_num = { ...seat_num };
    passengerDetails.forEach((passenger) => {
      if (
        passenger.services.meals.babyMeals ||
        passenger.services.meals.dietMeals ||
        passenger.services.meals.specialMeals
      )
        copy_seat_num[passenger.seat_num].color = "primary";
    });
    setSeats({ ...copy_seat_num });
  };

  const updateService = (seat) => {
    const newUpdateService = { ...seats };
    passengerDetails.some((passenger) => {
      if (passenger.seat_num === seat) {
        newUpdateService[seat].updateService = true;
        return true;
      }
    });
    setSeats({ ...newUpdateService });
  };

  const handleClose = (seat) => {
    const newUpdateService = { ...seats };
    newUpdateService[seat].updateService = false;
    setSeats({ ...newUpdateService });
  };

  function getpassenger(seat) {
    let passengerObj = {};
    passengerDetails.some((passenger) => {
      if (passenger.seat_num === seat) {
        passengerObj = { ...passenger };
        return true;
      }
    });
    return passengerObj;
  }

  return (
    <>
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
                      color={seats["01A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("01A")}
                    open={seats["01A"].updateService}
                    passengerObj={seats["01A"].passenger}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["02A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("02A")}
                    open={seats["02A"].updateService}
                    passengerObj={seats["02A"].passenger}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["03A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("03A")}
                    open={seats["03A"].updateService}
                    passengerObj={seats["03A"].passenger}
                  />
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
                      color={seats["04A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("04A")}
                    open={seats["04A"].updateService}
                    passengerObj={seats["04A"].passenger}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Paper
                    className={classes.paper}
                    onClick={() => updateService("05A")}
                  >
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["05A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("05A")}
                    open={seats["05A"].updateService}
                    passengerObj={seats["05A"].passenger}
                    onSave={saveService}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["06A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("06A")}
                    open={seats["06A"].updateService}
                    passengerObj={seats["06A"].passenger}
                  />
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
                      color={seats["07A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("07A")}
                    open={seats["07A"].updateService}
                    passengerObj={seats["07A"].passenger}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["08A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("08A")}
                    open={seats["08A"].updateService}
                    passengerObj={seats["08A"].passenger}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["09A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("09A")}
                    open={seats["09A"].updateService}
                    passengerObj={seats["09A"].passenger}
                  />
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
                      color={seats["10A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("10A")}
                    open={seats["10A"].updateService}
                    passengerObj={seats["10A"].passenger}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["11A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("11A")}
                    open={seats["11A"].updateService}
                    passengerObj={seats["11A"].passenger}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["12A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("12A")}
                    open={seats["12A"].updateService}
                    passengerObj={seats["12A"].passenger}
                  />
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
                      color={seats["13A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("13A")}
                    open={seats["13A"].updateService}
                    passengerObj={seats["13A"].passenger}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["14A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("14A")}
                    open={seats["14A"].updateService}
                    passengerObj={seats["14A"].passenger}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["15A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("15A")}
                    open={seats["15A"].updateService}
                    passengerObj={seats["15A"].passenger}
                  />
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
                      color={seats["16A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("16A")}
                    open={seats["16A"].updateService}
                    passengerObj={seats["16A"].passenger}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["17A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("17A")}
                    open={seats["17A"].updateService}
                    passengerObj={seats["17A"].passenger}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    {" "}
                    <EventSeatOutlined
                      className={classes.icons}
                      color={seats["18A"].color}
                    />
                  </Paper>
                  <UpdateService
                    onClose={() => handleClose("18A")}
                    open={seats["18A"].updateService}
                    passengerObj={seats["18A"].passenger}
                  />
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

MealGrid.propTypes = {
  passengerDetails: PropTypes.array.isRequired,
  saveService: PropTypes.func.isRequired,
};

export default MealGrid;
