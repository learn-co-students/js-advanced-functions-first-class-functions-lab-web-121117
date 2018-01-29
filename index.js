// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
  return [arr[0], arr[1]]
}

const returnLastTwoDrivers = function(arr){
  let lastIndex = arr.length - 1
  return [arr[lastIndex -1 ], arr[lastIndex]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
  return function(fare){
    return num * fare
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, func){
  return func(arr)
}
