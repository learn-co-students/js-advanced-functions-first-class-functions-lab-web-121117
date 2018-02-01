// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  const newArray = [array[0], array[1]];
  return newArray;
};

const returnLastTwoDrivers = function(array) {
  const newArray = [array[array.length - 2], array[array.length - 1]];
  return newArray;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int) {
  return function priceMaker(fare) {
    return int * fare;
  };
};

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare);
};

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare);
};

const selectDifferentDrivers = function(array, choice) {
  return choice(array);
};
