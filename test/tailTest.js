const assert = require('chai').assert;
const tail = require('../tail')


describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns ["Shouldn\'t", "Be", "Here"] for ["This", "Shouldn\'t", "Be", "Here"]', () => {
    assert.deepEqual(tail(["This", "Shouldn't", "Be", "Here"]), ["Shouldn't", "Be", "Here"]);
  });

  it('returns ["one", "last", "test"] for ["Here\'s", "one", "last", "test"]', () => {
    assert.deepEqual(tail(["Here's", "one", "last", "test"]), ["one", "last", "test"]);
  });



});

