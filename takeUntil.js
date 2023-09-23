

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


// It will take in two parameters as well:

// The array to work with
// The callback (which Lodash calls "predicate")

// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

// To keep things simple, the callback should only be provided one value: The item in the array.


const takeUntil = (array, callback) => {
  // ...
  const newArray = [];

  for (item of array) {
    if (callback(item)) {
      break;
    }
   newArray.push(item);
  }
  return newArray;
};





const expected1 = [ 1, 2, 5, 7, 2 ]



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



// --
const expected2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ]

assertArraysEqual(eqArrays(results1, expected1), true); 
//assertEqual(eqArrays(results1, expected1), true);
assertArraysEqual(eqArrays(results2, expected2), true); 

