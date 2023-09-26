// redoing without function to make sure i understand the principals




const without = (array, value) => {
  // add empty array for storing results in after sorting

  const result = [];

  // begin loop to look for the values to be removed
  for (let item of array) {
    // set the filter to make sure the value is not being observed
    if (item !== value) {
      // if filter is met push the value to the new array
      result.push(item);
    }
  }
  return result;

};


module.exports = without;