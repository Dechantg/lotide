
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);
  }
  // redoing the head function to make sure i understand how the principals in lotide work
  
  // copy in assertEqual function for validations
  
  const assertEqual = (actual, expected) => {
  
    // create comparison for strings. If strings are absolutely equal then immedatly return a pass and exit the function.
    if (actual === expected) {
      return console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
    }
  
    // if the condition above is not met then return to console a failure result
    return console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);
  
  }
  
  
  // start head function
  
  const head = (array) => {
    // return first value in the array
    return array[0];
  
  }
  
  
  
  
  assertEqual(head([5,6,7]), 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
};



const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), 5);