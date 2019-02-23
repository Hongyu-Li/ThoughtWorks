var expect = require('chai').expect;
var taxi_fee = require('../main/main.js');

describe('taxi fee', function() {
  it("returns 6 when distance is less than 2km", function() {
    var result = taxi_fee(2);
    var expect_result = 6;
    expect(expect_result).to.equal(result);
  });
});
