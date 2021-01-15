const { fetchMyIP } = require('./iss_promised');


const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {  // .then takes in a callback and prints it to the screen 
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work", error.message);
  })