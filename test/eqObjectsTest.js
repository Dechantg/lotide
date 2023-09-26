

const eqObjects = require('../eqObjects');


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };


// test codes for validation later

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };

const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };




console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => false

console.log(eqObjects(shirtObject, anotherShirtObject));

console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true