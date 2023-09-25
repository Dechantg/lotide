// Creating an assert equal function for the lotide project. This will be my second version done after the first week to prove to myself I understand what was happening. Was done in a new file and copied over to the original for pushing


const assertEqual = (actual, expected) => {

  // create comparison for strings. If strings are absolutely equal then immedatly return a pass and exit the function.
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
  }

  // if the condition above is not met then return to console a failure result
  return console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);

};


// TEST CODE

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Test String", "Test String");
assertEqual(1, 2);
