


// It will take in two parameters as well:

// The array to work with
// The callback (which Lodash calls "predicate")

// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

// To keep things simple, the callback should only be provided one value: The item in the array.


const takeUntil = (array, callback) => {
  // start an empty array to hold results

  const newArray = [];
  //begin loop to go through the values
  for (let item of array) {
    //filter callback vs item if filter conditions match then break the function
    if (callback(item)) {
      break;
    }
    //push the values into the empty array until the break initializes
    newArray.push(item);
  }
  return newArray;
};



module.exports = takeUntil;
