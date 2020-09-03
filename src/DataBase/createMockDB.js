const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const {flight_details, passenger_details} = mockData;
const data = JSON.stringify({flight_details, passenger_details});
const filePath = path.join(__dirname, "db.json");

fs.writeFile(filePath, data, function(err){
    err? console.log(err):console.log("Mock DB data created");
})