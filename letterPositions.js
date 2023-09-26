

// recreating the letterPosions function to confirm that i understand what was done and i understand the principals behind it




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
        results[letter] = [];
        results[letter].push(i);
        i++;
      }
    

    }
  }
  console.log(results);
  return results;
};

module.exports = letterPositions;