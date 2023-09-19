

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);
  }
};

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};


const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const resultTwo = tail(["Hello"]);

assertEqual(resultTwo.length, 2);

const resultThree = tail([]);

assertEqual(resultThree.length, 0);
