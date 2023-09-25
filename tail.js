// redoing the tail function to make sure i understand the concepts

// paste assertEqual for validations

const assertEqual = (actual, expected) => {

  // create comparison for strings. If strings are absolutely equal then immedatly return a pass and exit the function.
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
  }

  // if the condition above is not met then return to console a failure result
  return console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);

};

// start tail function to return everything except for the first value

const tail = (array) => {

  // create storage array for results
  const results = [];

  // start loop to go through the array
  for (let values of array) {
    // filter to make sure first value is not included
    if (values !== array[0]) {
      // if filter criteria met, push the value into new array
      results.push(values);
    }
  }

};



module.exports = tail;