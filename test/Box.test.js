var assert = require('assert');
var Box = require('../Box');

describe('Testing Box', function() {

    it('should assert the volume of the Box', function() {
      var obj = new Box(10, 20, 30);
      assert.equal(obj.getVolume(), 6000);
    })
  
  })