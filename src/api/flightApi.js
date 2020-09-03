const baseUrl = process.env.API_URL + "/flight_details/";

export function getFlightDetails() {
  return fetch(baseUrl)
    .then((response) => {
      if (response.ok) return response.json();
    })
    .catch((err) => {
      console.log("Flight API called failed", err);
      throw err;
    });
}
