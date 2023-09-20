
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

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let add = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        add = false;
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


assertArraysEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]), true); // => should PASS

assertArraysEqual([2, 3], [2, 3]); // => should PASS