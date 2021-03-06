const flight_details = [
  {
    flight_no: "E660",
    arrival_time: "5:30 PM",
    departure_time: "3:15 PM",
    origin_station: "Bengalore",
    destination_station: "Delhi",
    journey_time: {
      hours: "2",
      minutes: "15",
    },
  },
  {
    flight_no: "E675",
    arrival_time: "5:30 PM",
    departure_time: "3:15 PM",
    origin_station: "Bengalore",
    destination_station: "Delhi",
    journey_time: {
      hours: "2",
      minutes: "15",
    },
  },
];

const passenger_details = [
  {
    id: "PF660_1",
    flight_no: "E660",
    name: {
      first_name: "kalyani",
      last_name: "sharma",
    },
    DOB: "23-08-1987",
    seat_num: "01A",
    services: {
      meals: {
        babyMeals: true,
        dietMeals: false,
        specialMeals: false,
        normalMeals: false,
      },
      entertainment: true,
      shopping: "",
    },
    checked_in: false,
    address: {
      street: "105, Krishna Vilaments",
      city: "Bengaluru",
      state: "Karnataka",
    },
    passport: "passport1",
    wheel_chair: true,
    infant: true,
  },
  {
    id: "PF660_2",
    flight_no: "E660",
    name: {
      first_name: "shivani",
      last_name: "sharma",
    },
    DOB: "05-10-1993",
    seat_num: "05A",
    services: {
      meals: {
        babyMeals: true,
        dietMeals: false,
        specialMeals: false,
        normalMeals: false,
      },
      entertainment: true,
      shopping: "",
    },
    checked_in: false,
    address: {
      street: "102 Akriti Garden",
      city: "Bengaluru",
      state: "Karnataka",
    },
    passport: "Passport 2",
    wheel_chair: true,
    infant: true,
  },
  {
    id: "PF675_3",
    flight_no: "E675",
    name: {
      first_name: "kajal",
      last_name: "trivedi",
    },
    DOB: "30-03-1998",
    seat_num: "15A",
    services: {
      meals: {
        babyMeals: true,
        dietMeals: false,
        specialMeals: false,
        normalMeals: false,
      },
      entertainment: true,
      shopping: "",
    },
    checked_in: true,
    address: {
      street: "12 Jaya Nagar",
      city: "Bengaluru",
      state: "Karnataka",
    },
    passport: "Passport 3",
    wheel_chair: true,
    infant: true,
  },
];

module.exports = {
  flight_details,
  passenger_details,
};
