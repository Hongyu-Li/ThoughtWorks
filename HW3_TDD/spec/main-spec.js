var expect = require('chai').expect;
var taxi_fee = require('../main/main.js');

describe('taxi fee', function() {

  it("returns 6 when distance is shorter than 2km", function() {
    var result = taxi_fee(1.5);
    var expect_result = 6;
    expect(expect_result).to.equal(result);
  });

  it("returns 6+(distance-2)*0.8 when distance is between 2 and 8", function() {
    var result = taxi_fee(7);
    var expect_result = 10;
    expect(expect_result).to.equal(result);
  });

  it("returns round(6+(distance-2)*0.8) when distance is between 2 and 8", function() {
    var result = taxi_fee(8);
    var expect_result = 11;
    expect(expect_result).to.equal(result);
  });

  it("returns round(6+(distance-2)*0.8) when distance is between 2 and 8", function() {
    var result = taxi_fee(6);
    var expect_result = 9;
    expect(expect_result).to.equal(result);
  });

  it("returns round(10.8+(distance-8)*0.8*1.5) when distance is longer than 8", function() {
    var result = taxi_fee(9);
    var expect_result = 12;
    expect(expect_result).to.equal(result);
  });

  it("returns 0.25*waiting_time + net_taxi_fee", function() {
    var result = taxi_fee(2,4);
    var expect_result = 7;
    expect(expect_result).to.equal(result);
  });

  it("returns round(0.25*waiting_time + net_taxi_fee)", function() {
    var result = taxi_fee(2,5);
    var expect_result = 7;
    expect(expect_result).to.equal(result);
  });

  it("returns round(0.25*waiting_time + net_taxi_fee)", function() {
    var result = taxi_fee(6,5);
    var expect_result = 10;
    expect(expect_result).to.equal(result);
  });

  it("returns round(0.25*waiting_time + net_taxi_fee)", function() {
    var result = taxi_fee(9,5);
    var expect_result = 13;
    expect(expect_result).to.equal(result);
  });
});
