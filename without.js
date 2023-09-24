// redoing without function to make sure i understand the principals

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

  // change function to send actual and expected to the eqArrays function and call for a true or false. If they do not equal true, 


  if (eqArrays(actual, expected) === true) {
    return console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
  }

  // if the condition above is not met then return to console a failure result
  return console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);

}

const without = (array, value) => {
  // add empty array for storing results in after sorting

  const result = [];

  // begin loop to look for the values to be removed
  for (item of array) {
    // set the filter to make sure the value is not being observed
    if (item != value) {
      // if filter is met push the value to the new array
      result.push(item);
    }
  }
  return result;

};





const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);