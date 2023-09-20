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


const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let add = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        add = false;
        break;
      }
    }
    if (add) {
      newArray.push(source[i]);
    }
    
  }
  return newArray;

};


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]


// TEST CODE

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));

assertArraysEqual(without([1, 2, 3], [1,]), [2, 3], true); // => should PASS

assertArraysEqual([2, 3], [2, 3]); // => should PASS