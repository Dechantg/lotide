


const eqArrays = function(array1, array2) {
  let result = false;
  if (array1.length !== array2.length) {
    result = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      result = array1[i] === array2[i];
    }
  }
  return result;

};

const assertArraysEqual = function(array1, array2) {
  let result = true;
  if (array1 !== array2) {
    result = false;
  }

  if (result) {
    console.log(`✅✅✅ Assertion Passed! ${array1} === ${array2} ✅✅✅`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed! ${array1} !== ${array2} ⛔️⛔️⛔️`);
  }

};




// TEST CODE

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true


