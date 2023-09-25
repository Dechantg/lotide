
// redoing middle.js from scratch to make sure I understood the principles used. This new version was created in a seperate file and copy pasted for committing.






// start function to determin what the middle numbers are

const middle = function(array) {
  
  //create a storage array for end value

  const result = [];
  
  // filter for empty array and return an empty array if necessary
  if (array.length === 0) {
    return result;
  }
  
  // if the array is even length two results need to be pushed to result
  if (array.length % 2 === 0) {
    result.push(array[((array.length / 2) - 1)]);
    result.push(array[(array.length / 2)]);
    return result;
  }

  // if the array is an odd number then the middle number needs to be filtered out but finding hald the array length, rounding down and taking that number

  result.push(array[(Math.floor(array.length / 2))]);
  return result;

};

console.log(middle([]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4, 5]));

module.exports = middle