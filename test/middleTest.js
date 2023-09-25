
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');



//run the same functions through assertArraysEqual (and eqArrays) to validate results

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);