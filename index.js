// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return [drivers[0],drivers[1]];
}

const returnLastTwoDrivers = function (drivers){
    return [drivers[drivers.length-2],drivers[drivers.length-1]];
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function (fare){
        return fare * multiplier;
    }
}

const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier * 2;

}

const fareTripler = function(createFareMultiplier){
    return createFareMultiplier * 3;

}

const selectDifferentDrivers = function (drivers, driverSelection) {
    if (driverSelection===returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    } else if (driverSelection===returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    } else {
        console.log("Error: Enter valid function")
    }
    
}

/*const selectDifferentDrivers = function (drivers, driverSelection) {
    return driverSelection===returnFirstTwoDrivers ? returnFirstTwoDrivers(drivers): driverSelection===returnLastTwoDrivers(drivers)? returnLastTwoDrivers(drivers):"Error: Enter valid function"
}*/
