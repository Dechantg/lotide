
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);
  }
};

let array = [1, 2, 3, 4, 5, 6, 7, 8];

const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")
assertEqual(head([5]), 5);
assertEqual(head([]), 5);