import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PassengerDisplay from "./PassengerListDisplay";

function PassengerList({ passengerList, onSave }) {
  const [newPassengerList, setNewPassengerList] = useState([...passengerList]);
  const [filters, setFilters] = useState({
    none: true,
    checkedIn: false,
    wheelChair: false,
    infant: false,
  });

  const handleDetailsChange = (event, passenger, field) => {
    event.preventDefault();
    let updatedPassenger = { ...passenger };
    switch (field) {
      case "checked_in":
        updatedPassenger.checked_in = updatedPassenger.checked_in
          ? false
          : true;
        break;
      case "seat_num":
        updatedPassenger.seat_num = event.target.value;
        break;
      default:
    }
    const updatedPassengerList = newPassengerList.map((passenger) =>
      passenger.id === updatedPassenger.id ? { ...updatedPassenger } : passenger
    );
    setNewPassengerList([...updatedPassengerList]);
  };

  useEffect(() => {
    setNewPassengerList([...passengerList]);
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
    let filterPassengerList = [];
    if (filters.checkedIn) {
      filterPassengerList = passengerList.filter(
        (passenger) => passenger.checked_in
      );
    } else if (filters.wheelChair) {
      filterPassengerList = passengerList.filter(
        (passenger) => passenger.wheel_chair
      );
    } else if (filters.infant) {
      filterPassengerList = passengerList.filter(
        (passenger) => passenger.infant
      );
    } else {
      filterPassengerList = JSON.parse(JSON.stringify(passengerList));
    }

    setNewPassengerList([...filterPassengerList]);
  }

  return (
    <PassengerDisplay
      newPassengerList={newPassengerList}
      filters={filters}
      handleDetailsChange={handleDetailsChange}
      handleFilterChange={handleFilterChange}
      onSave={onSave}
    />
  );
}

PassengerList.propTypes = {
  passengerList: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default PassengerList;
