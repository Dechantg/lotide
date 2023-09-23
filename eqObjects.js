


const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);
  }
};

const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
 

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




const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true


assertEquals(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false);

const shortSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "short" };
eqObjects(shirtObject , shortSleeveShirtObject); // => false
assertEquals(eqObjects(shirtObject , shortSleeveShirtObject), false);

const shortSleeveShirtObject2= { size: "medium", color: "red", sleeveLength: "short" };
eqObjects(shortSleeveShirtObject , shortSleeveShirtObject2); // => true
assertEquals(eqObjects(shortSleeveShirtObject , shortSleeveShirtObject2), true);

const shortSleeveShirtObject3= { size: "medium", color: "red", sleeveLength: "short", material: "cotton" };
eqObjects(shortSleeveShirtObject , shortSleeveShirtObject3); // => false
assertEquals(eqObjects(shortSleeveShirtObject , shortSleeveShirtObject3), false);

const shortSleeveShirtObject4= { size: "medium", color: "red", sleeveLength: "short", material: "cotton" };
eqObjects(shortSleeveShirtObject3 , shortSleeveShirtObject4); // => true
assertEquals(eqObjects(shortSleeveShirtObject3 , shortSleeveShirtObject4), true);
