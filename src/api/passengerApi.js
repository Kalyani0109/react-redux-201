const baseUrl = process.env.API_URL + "/passenger_details/";

export function getPassengerDetails() {
  return fetch(baseUrl)
    .then((response) => {
      if (response.ok) return response.json();
    })
    .catch((err) => {
      console.log("Passenger API called failed", err);
      throw err;
    });
}

export function updatePassenger(passenger) {
  return fetch(baseUrl + (passenger.id || ""), {
    method: passenger.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(passenger),
  })
    .then((response) => {
      if (response.ok) return response.json();
    })
    .catch((err) => {
      console.log("Update Passenger API called Failed", err);
      throw err;
    });
}
