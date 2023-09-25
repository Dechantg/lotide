

// redoing the assertArraysEqual function to ensure that I understand the concepts. This code was done fresh in a second file then copy pasted in for committing


// add in my eqArrays function.

const eqArrays = function(actual, expected) {

  // compare array length. if lengths to not match immediatly return false

  if (actual.length !== expected.length) {
    return false;
  }

  // create a loop to compare individual components in the arrays

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
   
  }

  // if neither of the above conditions fail, return true
  
  return true;
  
};


// copy past my assertEqual function and rename it to assertArraysEqual



const assertArraysEqual = (actual, expected) => {

  // change function to send actual and expected to the eqArrays function and call for a true or false. If they do not equal true


  if (eqArrays(actual, expected) === true) {
    return console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
  }

  // if the condition above is not met then return to console a failure result
  return console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);

};


// test codes

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1, 4]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
