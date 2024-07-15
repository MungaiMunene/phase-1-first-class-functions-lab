// returnsFirstTwoDrivers in the array
const returnFirstTwoDrivers = function (driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return driversArray.slice(0,2); 
}

// returnsLastTwoDrivers in the array
const returnLastTwoDrivers = function (driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return driversArray.slice(-2); 
}

// function to return both first and last two drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier()
const createFareMultiplier = function (multiplier) {
    return function(fare) {
        return fare * multiplier; 
    }; 
}; 

// Fare doubler
const fareDoubler = createFareMultiplier(2);

// Fare tripler
const fareTripler = createFareMultiplier(3);

// Function to select different drivers
const selectDifferentDrivers = function(arrayOfDrivers, selectingFunction) {
    return selectingFunction(arrayOfDrivers);
};