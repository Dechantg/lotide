//redoing the assertObjectsEqual function to make sure i was able to follow the logic and impliment it correctly



const eqObjects = function(object1, object2) {
  // store the keys of the objects into arrays
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  // console.log(object1Keys + object2Keys)
      
  // filter to make sure the lengths match else return false
   if (object1Keys.length !== object2Keys.length) {
  return false;
  }
  // filter to make sure that the keys match (even if a different order)
      
  for (let i = 0; i < object1Keys.length; i++) {
   // console.log(object1Keys[i])
  if (!(object1Keys[i] in object2)) {
    return false;
  }
          //filter the values of the keys against each other
          if (object1[object1Keys[i]] !== object2[object1Keys[i]]) {
            return false;
          }
        }
        return true;
      
};
      
      
      
      
      
const assertObjectsEqual = (actual, expected) => {
      
  const inspect = require('util').inspect;
        
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

  
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertObjectsEqual(shirtObject , anotherShirtObject); // => true
      
