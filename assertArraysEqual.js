// compare arrays to make sure they are equal

const eqArrays = (actual, expected) => {
  // check to make sure the length of the array is equal otherwise return false
  if (actual.length !== expected.length) {
    return false;
  }
  // loop through the array and confirm the values are also equal. if not return false
    for (let i = 0; i < actual.length; i++) {
   if (actual[i] !== expected[i]) {
     return false;
   }
  }
  // if both validation pass then return true
  return true;
};


// create a function to validate arrays. console log a pass or fail message
const assertArraysEqual = (actual, expected) => {
  //store the results messages into a variable
  const testPassed = `✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`;
  const testFailed = `⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`;
  // callback the values to the eqArrays function to validate
  if (eqArrays(actual, expected)) {
    //if eqArrays returns true then console log the testPassed message then return to hault the loop
    console.log(testPassed);
    return;
  } 
  //if the eqArrays returns false then console log the testFailed message then return the loop to end it
  console.log(testFailed);
  return;
};



// TEST CODE

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertArraysEqual([1, 2, 3], [1, 2, 3], false); // => true


