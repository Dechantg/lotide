

// recreating the letterPosions function to confirm that i understand what was done and i understand the principals behind it



const eqArrays = function(actual, expected) {

  // compare array length. if lengths to not match immediatly return false

  if (actual.length !== expected.length) {
          return false;
  }

  // create a loop to compare individual components in the arrays

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
   
  }

  // if neither of the above conditions fail, return true
  
  return true;
  
};


// copy past my assertEqual function and rename it to assertArraysEqual



const assertArraysEqual = (actual, expected) => {

  // change function to send actual and expected to the eqArrays function and call for a true or false. If they do not equal true, 


  if (eqArrays(actual, expected) === true) {
    return console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
  }

  // if the condition above is not met then return to console a failure result
  return console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);

}




// create the new function called letterPositions
const letterPositions = (sentence) => {

  // create an empty object to store results in

  const results = {};
  // create variable for looping string locations with
  let i = 0;
  // start loop of sentance
  for (let letter of sentence) {
    // check to see if the letter already exists in thje object, if so add the position of the second instance (with a ", " in front for legibility)

    if (letter in results) {
      results[letter].push(i);
    } else {

      // if the letter is not already in the result, and does not equal a space, add the letter, then add the current position of the letter and go back to the loop
      if (letter !== " ") {
    results[letter] = []
    results[letter].push(i);
    i++
    }
    

  }
}
console.log(results);
return results;
};

letterPositions("lighthouse in the house");

letterPositions("hello");
assertArraysEqual(letterPositions("hello").e, [1]);