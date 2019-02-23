var expect = require('chai').expect;
var taxi_fee = require('../main/main.js');

describe('taxi fee', function() {

  it("returns 6 when distance is less than 2km", function() {
    var result = taxi_fee(1.5);
    var expect_result = 6;
    expect(expect_result).to.equal(result);
  });

  it("returns 6+(distance-2)*0.8 when distance is between 2 and 8", function() {
    var result = taxi_fee(7);
    var expect_result = 10;
    expect(expect_result).to.equal(result);
  });
});
