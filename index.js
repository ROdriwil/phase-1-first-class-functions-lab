// Code your solution in this file!
const returnFirstTwoDrivers = function (names) { 
    names =['Antonia', 'Nuru', 'Amari', 'Mo']
    return names.slice(0,2);
}
const returnLastTwoDrivers = function (names) { 
    return names.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier){
    return function (number) {
        return number * fareMultiplier;

    }
    
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (names, selectingDrivers){
    return selectingDrivers(names);

}