// redoing findKeyByValue function to make sure i understant principals behind it


// copy assertEqual function into file

const assertEqual = (actual, expected) => {

  // create comparison for strings. If strings are absolutely equal then immedatly return a pass and exit the function.
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
  }

  // if the condition above is not met then return to console a failure result
  return console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);

};

// test object

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


// start function to find a key by a value.

const findKeyByValue = (object, value) => {

 
  // loop the array to compare the keys against their values in the object

  for (let key in object) {
    if (object[key] === value) {
      // if comparison is true then return the key being observed
      return key;
    }
  }
};

// validate result with assertEqual



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

