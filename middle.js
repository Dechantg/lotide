
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
       
  }
  return true;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);
  }

};


const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return
  } else if (array.length % 2 === 0) {

    middleArray.push(array[(array.length / 2) - 1]);
    middleArray.push(array[array.length / 2]);
    return middleArray;
  }
};

// TEST CODE

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => should PASS
