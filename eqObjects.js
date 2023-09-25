// redoing the eqObjects function to make sure i understand the principals behind it


// copy in assertEqual function as a validator


const assertEqual = (actual, expected) => {

  // create comparison for strings. If strings are absolutely equal then immedatly return a pass and exit the function.
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
  }

  // if the condition above is not met then return to console a failure result
  return console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);

};


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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };



// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false


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

