// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
    return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr){
  return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int){
 return function(fare){
   return fare*int
 }
}
const fareDoubler = function(f){
  let fare = f
  return createFareMultiplier(2)(f)
}

const fareTripler = function(f){
  let fare = f
  return createFareMultiplier(3)(f)
}

const selectDifferentDrivers = function(arr, func){
  if (func === returnLastTwoDrivers){
  return returnLastTwoDrivers(arr)}
  else if (func === returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arr)
  }
}
