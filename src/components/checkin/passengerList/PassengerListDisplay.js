import React, { useState } from "react";
import PropTypes from "prop-types";
import UpdatePassenger from "./UpdatePassenger";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    margin: theme.spacing(1),
  },
}));

function PassengerListDisplay({
  filters,
  newPassengerList,
  handleFilterChange,
  handleDetailsChange,
  onSave,
}) {
  const classes = useStyles();

  const [openUpdatePassenger, setOpenUpdatePassenger] = useState(
    newPassengerList.map(() => false)
  );

  const updatePassenger = (passenger, index) => {
    console.log("Opening passener dialog", passenger);
    const newOpenPass = [...openUpdatePassenger];
    newOpenPass[index] = true;
    setOpenUpdatePassenger([...newOpenPass]);
  };

  const handleClose = (index) => {
    const newOpenPass = [...openUpdatePassenger];
    newOpenPass[index] = false;
    setOpenUpdatePassenger([...newOpenPass]);
  };

  return (
    <>
      <>
        <FormControlLabel
          control={
            <Radio
              checked={filters.none}
              onChange={handleFilterChange}
              value="none"
              name="none"
            />
          }
          label="None"
        ></FormControlLabel>

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
      <TableContainer component={Paper} dense="true">
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Passenger Name</TableCell>
              <TableCell align="center">Checked In</TableCell>
              <TableCell align="center">Seat Number</TableCell>
              <TableCell align="center">Services</TableCell>
              <TableCell align="center">Passport</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newPassengerList.map((passenger, index) => (
              <TableRow key={passenger.id}>
                <TableCell component="th" scope="row">
                  {passenger.name.first_name} {passenger.name.last_name}
                </TableCell>
                <TableCell align="right">
                  {passenger.checked_in
                    ? JSON.parse(JSON.stringify("YES"))
                    : JSON.parse(JSON.stringify("NO"))}
                  <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={(event) =>
                      handleDetailsChange(event, passenger, "checked_in")
                    }
                  >
                    Check In
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={passenger.seat_num}
                    className={classes.input}
                    onChange={(event) =>
                      handleDetailsChange(event, passenger, "seat_num")
                    }
                  ></TextField>
                </TableCell>
                <TableCell align="right">
                  <List dense={true}>
                    <ListItem>
                      <ListItemText primary="Meals" />
                      <ListItemText
                        primary={
                          passenger.services.meals
                            ? JSON.parse(JSON.stringify("YES"))
                            : JSON.parse(JSON.stringify("NO"))
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Entertainment" />
                      <ListItemText
                        primary={
                          passenger.services.entertainment
                            ? JSON.parse(JSON.stringify("YES"))
                            : JSON.parse(JSON.stringify("NO"))
                        }
                      />
                    </ListItem>
                  </List>
                </TableCell>
                <TableCell align="right">{passenger.passport}</TableCell>
                <TableCell align="right">
                  <Button
                    className={classes.button}
                    variant="outlined"
                    color="primary"
                    onClick={(event) => onSave(event, passenger)}
                  >
                    Save
                  </Button>
                  <Button
                    className={classes.button}
                    variant="outlined"
                    color="primary"
                    onClick={() => updatePassenger(passenger, index)}
                  >
                    Update
                  </Button>
                  <UpdatePassenger
                    open={openUpdatePassenger[index]}
                    onClose={() => handleClose(index)}
                    passengerDetails={passenger}
                    onSave={onSave}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

PassengerListDisplay.propTypes = {
  newPassengerList: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  handleDetailsChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default PassengerListDisplay;
