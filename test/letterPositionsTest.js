
const letterPositions = require('../letterPositions');

const eqArrays = require('../eqArrays');

const assertArraysEqual = require('../assertArraysEqual');

letterPositions("lighthouse in the house");

letterPositions("hello");
assertArraysEqual(letterPositions("hello").e, [1]);