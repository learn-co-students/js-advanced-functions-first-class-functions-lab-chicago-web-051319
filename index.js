// Code your solution in this file!

const returnFirstTwoDrivers = function  (drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function  (drivers) {
    return drivers.slice(-2, drivers.length + 1)
}

const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (int) {
    return (fare) =>  fare * int
}

const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function (fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers (drivers, func){
    return func(drivers)
}