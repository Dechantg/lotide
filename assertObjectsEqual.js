//redoing the assertObjectsEqual function to make sure i was able to follow the logic and impliment it correctly

const eqObjects = require('./eqObjects.js');

      
      
      
const assertObjectsEqual = (actual, expected) => {
      
  const inspect = require('util').inspect;
        
    if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed! ${inspect(actual)} === ${inspect(expected)} ✅✅✅`);
        return;
    }
      
    console.log(`⛔️⛔️⛔️ Assertion Failed! ${inspect(actual)} !== ${inspect(expected)} ⛔️⛔️⛔️`);
    return;
      
    };
      
      

  

      
module.exports = assertObjectsEqual;
