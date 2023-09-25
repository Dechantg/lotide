
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected} ✅✅✅`);
//   } else {
//     console.log(`⛔️⛔️⛔️ Assertion Failed! ${actual} !== ${expected} ⛔️⛔️⛔️`);
//   }
//   // redoing the head function to make sure i understand how the principals in lotide work
  
  // copy in assertEqual function for validations
  
  const assertEqual = require('./assertEqual');
  

  
  
  // start head function
  
  const head = (array) => {
    // return first value in the array
    return array[0];
  
  };


module.exports = head;
