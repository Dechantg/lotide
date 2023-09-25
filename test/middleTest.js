
const assert = require('chai').assert

const middle = require('../middle');


describe('#middle', () => {

  it('returns [2] for [1,2,3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('returns [3, 4] for [1, 2, 3, 4, 5, 6])', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [ 3, 4 ]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("fails for [], 5", () => {
    assert.deepEqual(middle([]), [5]);
  });



});





//run the same functions through assertArraysEqual (and eqArrays) to validate results
