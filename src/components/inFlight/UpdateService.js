import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Switch,
  InputLabel,
  TextField,
  DialogActions,
  Button,
} from "@material-ui/core";

function UpdateService({ onClose, open, passengerObj, onSave }) {
  const [passenger, setPassenger] = useState({ ...passengerObj });
  const handleClose = () => {
    onClose();
  };
  const handleChange = (event) => {
    event.preventDefault();
    const newPassenger = { ...passenger };
    if (passenger) {
      if (event.target.name === "shopping") {
        newPassenger.services[event.target.name] = event.target.value;
      } else if (event.target.name === "entertainment") {
        newPassenger.services[event.target.name] = event.target.checked;
      } else {
        newPassenger.services.meals[event.target.name] = event.target.checked;
      }
    }
    setPassenger({ ...newPassenger });
  };

  const save = (event, passenger) => {
    onSave(event, passenger);
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Update Passenger Details</DialogTitle>
      <DialogContent>
        <Typography color="primary" component="h2" style={{ margin: 10 }}>
          Baby Meals
          <Switch
            name="BabyMeals"
            checked={
              passenger &&
              passenger.services &&
              passenger.services.meals.babyMeals
                ? passenger.services.meals.babyMeals
                : false
            }
            onChange={handleChange}
          />
        </Typography>
        <Typography color="primary" component="h2" style={{ margin: 10 }}>
          Diet Meals
          <Switch
            name="dietMeals"
            checked={
              passenger &&
              passenger.services &&
              passenger.services.meals.dietMeals
                ? passenger.services.meals.dietMeals
                : false
            }
            onChange={handleChange}
          />
        </Typography>
        <Typography color="primary" component="h2" style={{ margin: 10 }}>
          Social Meals
          <Switch
            name="specialMeals"
            checked={
              passenger &&
              passenger.services &&
              passenger.services.meals.specialMeals
                ? passenger.services.meals.specialMeals
                : false
            }
            onChange={handleChange}
          />
        </Typography>
        <Typography color="primary" component="h2" style={{ margin: 10 }}>
          Normal Meals
          <Switch
            name="normalMeals"
            checked={
              passenger &&
              passenger.services &&
              passenger.services.meals.normalMeals
                ? passenger.services.meals.normalMeals
                : false
            }
            onChange={handleChange}
          />
        </Typography>
        <Typography color="primary" component="h2" style={{ margin: 10 }}>
          Entertainment
          <Switch
            name="entertainment"
            checked={
              passenger &&
              passenger.services &&
              passenger.services.entertainment
                ? passenger.services.entertainment
                : false
            }
            onChange={handleChange}
          />
        </Typography>
        <InputLabel>Shopping</InputLabel>
        <TextField
          label="shopping"
          onChange={handleChange}
          value={
            passenger && passenger.services && passenger.services.shopping
              ? passenger.services.shopping
              : ""
          }
          name="shopping"
          style={{ margin: 10 }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          style={{ margin: 10 }}
          onClick={(event) => save(event, passenger)}
          variant="outlined"
          color="primary"
        >
          {" "}
          Save{" "}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

UpdateService.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  passengerObj: PropTypes.object.isRequired,
  onSave: PropTypes.func,
};

export default UpdateService;
