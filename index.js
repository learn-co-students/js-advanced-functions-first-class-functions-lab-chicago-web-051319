// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(drivers.length-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(fareMultiplier) {
  return function (fare) {
    return fare * fareMultiplier;
  };
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, driversFunction) {
  return driversFunction(drivers)
}
