

// redoing the assertArraysEqual function to ensure that I understand the concepts. This code was done fresh in a second file then copy pasted in for committing

const eqArrays = require('./eqArrays');


// copy past my assertEqual function and rename it to assertArraysEqual



const assertArraysEqual = (actual, expected) => {

  // change function to send actual and expected to the eqArrays function and call for a true or false. If they do not equal true


  if (eqArrays(actual, expected) === true) {
    return console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
  }

  // if the condition above is not met then return to console a failure result
  return console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);

};

module.exports = assertArraysEqual