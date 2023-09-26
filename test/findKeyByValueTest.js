
const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');


// test object

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
// validate result with assertEqual



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

