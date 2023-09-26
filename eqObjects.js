// redoing the eqObjects function to make sure i understand the principals behind it


// copy in assertEqual function as a validator

const eqArrays = require('./eqArrays');


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  // store the keys of the objects into arrays
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  // console.log(object1Keys + object2Keys)

  // filter to make sure the lengths match else return false
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
 
  // sort keys for consistent order
 
  object1Keys.sort();
  object2Keys.sort();


  // filter to make sure that the keys match (even if a different order)

  for (let i = 0; i < object1Keys.length; i++) {
    // console.log(object1Keys[i])
    if (!(object1Keys[i] in object2)) {
      return false;
    }

    if (Array.isArray(object1[object1Keys[i]]) && Array.isArray(object2[object1Keys[i]])) {
      const actual = object1[object1Keys[i]]
      const expected = object2[object1Keys[i]]

      if (!eqArrays(actual, expected)) {      return false;
       }
    }

    //filter the values of the keys against each other
    if (object1[object1Keys[i]] !== object2[object1Keys[i]]) {
      return false;
    }
  }
  return true;

};






module.exports = eqObjects