
// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

// create function findKey to take in an object and get a callback


const findKeys = (object, callback) => {
  // loop through the object

  for (let key in object) {

    // compare the keys in the object with the callback and return if found
    if (callback(object[key])) {
      return key;
    }
  }
  // return undefined if the key is not found
  return undefined;
};



module.exports = findKeys;
