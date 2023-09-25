// second attempt at eqArrays funtion to ensure I understand the principles of what was created. This was created from a seperate file then copy pasted back into lotide for upload. attempts to refactor and apply things learned later in the week have been incorporated



// create the eqArray function

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


module.exports = eqArrays;