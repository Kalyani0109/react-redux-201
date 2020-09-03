import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Typography,
  DialogActions,
  Button,
} from "@material-ui/core";
import PropTypes from "prop-types";

function UpdatePassenger({ open, onClose, passengerDetails, onSave }) {
  const [passenger, setPassenger] = useState({ ...passengerDetails });

  const handleChange = (event) => {
    const newPassenger = { ...passenger };
    switch (event.target.name) {
      case "first_name":
        newPassenger.name.first_name = event.target.value;
        break;
      case "last_name":
        newPassenger.name.last_name = event.target.value;
        break;
      case "passport":
        newPassenger.passport = event.target.value;
        break;
      case "city":
        newPassenger.adress.city = event.target.value;
        break;
      case "street":
        newPassenger.adress.street = event.target.value;
        break;
      case "state":
        newPassenger.adress.state = event.target.value;
        break;
      default:
    }
    setPassenger({ ...newPassenger });
  };

  const handleClose = () => {
    onClose();
  };

  const save = (event, passenger) => {
    onSave(event, passenger);
    onClose();
  };

  useEffect(() => {
    console.log("Passenger details in dialog", passengerDetails);
  }, []);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Update Passenger Details</DialogTitle>
      <form>
        <DialogContent>
          <Typography component="h1" color="primary" style={{ margin: 10 }}>
            {" "}
            Name{" "}
          </Typography>
          <TextField
            style={{ margin: 10 }}
            value={passenger.name.first_name}
            name="first_name"
            onChange={handleChange}
          />
          <TextField
            style={{ margin: 10 }}
            value={passenger.name.last_name}
            name="last_name"
            onChange={handleChange}
          />
          <Typography component="h1" color="primary" style={{ margin: 10 }}>
            Passport{" "}
          </Typography>
          <TextField
            style={{ margin: 10 }}
            value={passenger.passport}
            name="passport"
            onChange={handleChange}
          />
          <Typography component="h1" color="primary" style={{ margin: 10 }}>
            {" "}
            Address{" "}
          </Typography>
          <TextField
            style={{ margin: 10 }}
            value={passenger.address.street}
            name="street"
            onChange={handleChange}
          />
          <TextField
            style={{ margin: 10 }}
            value={passenger.address.city}
            name="city"
            onChange={handleChange}
          />
          <TextField
            style={{ margin: 10 }}
            value={passenger.address.state}
            name="state"
            onChange={handleChange}
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
      </form>
    </Dialog>
  );
}

UpdatePassenger.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  passengerDetails: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default UpdatePassenger;
