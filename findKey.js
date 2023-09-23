
// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);
  }
};


// const findKeyByValue = function(object, value) {
//   for (let key in object) {
//     if (object[key] === value) {
//       return key;
//     }
//   }
//   return undefined;
// };

// create function findKey to take in an object and get a callback

const findKey = (object, callback) => {
  // loop through the object

  for (let key in object) {

    // compare the keys in the object with the callback and return if found
    if (callback(object[key])) {
      return key;
    }
  }
  // return undefined if the key is not found
  return undefined;
};



const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"



assertEqual(result, "noma");