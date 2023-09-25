
// redoing middle.js from scratch to make sure I understood the principles used. This new version was created in a seperate file and copy pasted for committing.


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

// start function to determin what the middle numbers are

const middle = function(array) {
  
  //create a storage array for end value

  const result = [];
  
  // filter for empty array and return an empty array if necessary
  if (array.length === 0) {
    return result;
  }
  
  // if the array is even length two results need to be pushed to result
  if (array.length % 2 === 0) {
    result.push(array[((array.length / 2) - 1)]);
    result.push(array[(array.length / 2)]);
    return result;
  }

  // if the array is an odd number then the middle number needs to be filtered out but finding hald the array length, rounding down and taking that number

  result.push(array[(Math.floor(array.length / 2))]);
  return result;

};

console.log(middle([]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4, 5]));

//run the same functions through assertArraysEqual (and eqArrays) to validate results

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);