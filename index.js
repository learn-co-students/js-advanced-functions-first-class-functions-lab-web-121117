// Code your solution in this file!

const returnFirstTwoDrivers = function(array){
  return array.slice(0,2);
}

// returnFirstTwoDrivers() —
// Declare a variable with const that is assigned an
// anonymous function. The assigned function should
// accept an array of drivers as an argument and
// return the first two drivers in the array.

const returnLastTwoDrivers = function(array){
  return array.slice(-2);
}

// returnLastTwoDrivers() —
// Declare a variable with const that is assigned an
// anonymous function. The assigned function should
// accept an array of drivers as an argument and
// return the first two drivers in the array.

const selectingDrivers = [
 returnFirstTwoDrivers,
 returnLastTwoDrivers
];
// selectingDrivers() —
// This is an array containing two elements:
// the two functions that we previously defined
// (returnFirstTwoDrivers() and returnLastTwoDrivers()).

function createFareMultiplier(integer){
  return function(rideFare){
    return rideFare * integer
  }
}
//createFareMultiplier() —
//This is a higher-order function that takes in
//one argument, an integer, and returns a function
//that will multiply a fare for a ride accordingly.
//If createFareMultiplier() receives an argument of
//4, it will return a function that takes in a fare
//as an argument and quadruples the fare.

const fareDoubler = createFareMultiplier(2);
//fareDoubler() —
//Declare a variable with const and assign a
//function returned by createFareMultiplier() to it.
//Invoke createFareMultiplier() in such a way that the
//new fareDoubler() function accepts a fare as its
//lone argument and doubles it.

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, func){
 return func(array);
}
//selectDifferentDrivers() —
//This function takes two arguments, an array of drivers
//and either the returnFirstTwoDrivers() or
//returnLastTwoDrivers() function.
//Based on these two arguments, selectDifferentDrivers()
// will return either the first two drivers or the
//last two drivers.
