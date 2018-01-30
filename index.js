// Code your solution in this file!

const returnFirstTwoDrivers = function(collection) {
  return collection.slice(0, 2);
};

const returnLastTwoDrivers = function(collection) {
  return collection.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (argument) {
  return function (num) {
    return num * argument;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (collection, fn) {
  return fn(collection);
};
