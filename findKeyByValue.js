// redoing findKeyByValue function to make sure i understant principals behind it


// copy assertEqual function into file



// start function to find a key by a value.

const findKeyByValue = (object, value) => {

 
  // loop the object to compare the keys against their values in the object

  for (let key in object) {
    if (object[key] === value) {
      // if comparison is true then return the key being observed
      return key;
    }
  }
};

module.exports = findKeyByValue