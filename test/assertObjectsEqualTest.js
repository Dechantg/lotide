
const eqObjects = require('../eqObjects');
const assertObjectsEqual = require('../assertObjectsEqual');



const shirtObject = {
  color: "red", size: "medium",
  // brand: "nike"
  };


const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertObjectsEqual(shirtObject , anotherShirtObject); // => true
      
