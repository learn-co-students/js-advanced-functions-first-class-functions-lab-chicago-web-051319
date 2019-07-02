// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    let newArray = [];
    newArray.push(array[0]);
    newArray.push(array[1]);
    return newArray;
}

const returnLastTwoDrivers = (array) => {
    let newArray = [];
    newArray.push(array[array.length-2]);
    newArray.push(array[array.length-1]);
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function(fare){
        return fare * integer;
    };
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare);
};

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare);
};

function fetchSpecifiedDrivers(drivers, functionMethod){
   return functionMethod(drivers);
}
function selectDifferentDrivers(drivers, functionMethod){
    return functionMethod(drivers);
 }