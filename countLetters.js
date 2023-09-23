// recreating a count letters function in a fresh file then copy pasting over to make sure I understand the principles


// copy paste in my assertEqual for later validation

// const assertEqual = (actual, expected) => {

//   // create comparison for strings. If strings are absolutely equal then immedatly return a pass and exit the function.
//   if (actual === expected) {
//     return console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
//   }

//   // if the condition above is not met then return to console a failure result
//   return console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);

// };

// create the function countLetters to analyse a string 

const countLetters = (string) => {

  //create an empty object to store results into
  const result = {};
    

  // create a loop to filter for the results

  for (let letters of string) {

    // determin if the letter is already in the object, if so then pass on
    if (letters in result) {
      result[letters] += 1;
    } else {

      // if the letter is not already in the result, and does not equal a space, add it and go back to the loop
      if (letters !== " ") {
    result[letters] = 1
    }
  }
  }

  // console.log the result then return it to the function

  console.log(result);

  return result

};

countLetters("test string");


