
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');



const expected1 = [ 1, 2, 5, 7, 2 ];



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



// --
const expected2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];

assertArraysEqual(eqArrays(results1, expected1), true);
//assertEqual(eqArrays(results1, expected1), true);
assertArraysEqual(eqArrays(results2, expected2), true);
