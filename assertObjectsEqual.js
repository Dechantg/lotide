

// const assertEquals = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
//   } else {
//     console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);
//   }
// };

const eqObjects = (object1, object2) => {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
 console.log(object1Keys);
  console.log(object2Keys);
  
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (let key of object1Keys) {
  
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
    
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) { // if not array
      return false;
    }
  }
  return true;
};



const assertObjectsEqual = (actual, expected) => {

  const inspect = require('util').inspect; // <= add this line

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed! ${inspect(actual)} === ${inspect(expected)} ✅✅✅`);
    return;
  } 

    console.log(`⛔️⛔️⛔️ Assertion Failed! ${inspect(actual)} !== ${inspect(expected)} ⛔️⛔️⛔️`);
    return;

};


const shirtObject = { 
  color: "red", size: "medium", 
  // brand: "nike"
};
const anotherShirtObject= { size: "medium", color: "red" };
//eqObjects(shirtObject , anotherShirtObject); // => true
assertObjectsEqual(shirtObject , anotherShirtObject); // => true

