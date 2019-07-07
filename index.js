// Code your solution in this file!
const returnFirstTwoDrivers = function(arrDriv){
  let newArr = [];
  newArr.push(arrDriv[0], arrDriv[1]);
  return newArr
}

const returnLastTwoDrivers = function(arrDriv){
  let newArr = [];
  newArr.push(arrDriv[arrDriv.length -2], arrDriv[arrDriv.length -1])
  return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num){
  return function(fare){
    return fare * num
  }
}

const fareDoubler = function(fare){
  return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
  return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers)
}
