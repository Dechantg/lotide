// second attempt at eqArrays funtion to ensure I understand the principles of what was created. This was created from a seperate file then copy pasted back into lotide for upload. attempts to refactor and apply things learned later in the week have been incorporated

// copy paste in the assertEqual function

const assertEqual = (actual, expected) => {

  // create comparison for strings. If strings are absolutely equal then immedatly return a pass and exit the function.
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
  }

  // if the condition above is not met then return to console a failure result
  return console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);

};

// create the eqArray function

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




eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1, 4]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS