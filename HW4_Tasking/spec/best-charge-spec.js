// Take out food: main tests
var expect = require('chai').expect;
var bestCharge = require('../src/best-charge.js');

describe('Take out food: Main Tests', function() {

  it("should generate best charge when best is 指定菜品半价", function() {
    let OrderInfo = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    var OutputSheet = bestCharge(OrderInfo);
    var expect_result = `
============= 订餐明细 =============
黄焖鸡 x 1 = 18元
肉夹馍 x 2 = 12元
凉皮 x 1 = 8元
-----------------------------------
使用优惠:
指定菜品半价(黄焖鸡，凉皮)，省13元
-----------------------------------
总计：25元
===================================`.trim();
    expect(expect_result).to.eql(OutputSheet);
  });

  it("should generate best charge when best is 满30减6元", function() {
    let OrderInfo = ["ITEM0013 x 4", "ITEM0022 x 1"];
    var OutputSheet = bestCharge(OrderInfo);
    var expect_result =  `
============= 订餐明细 =============
肉夹馍 x 4 = 24元
凉皮 x 1 = 8元
-----------------------------------
使用优惠:
满30减6元，省6元
-----------------------------------
总计：26元
===================================`.trim();
    expect(expect_result).to.eql(OutputSheet);
  });

  it("should generate best charge when no promotion can be used", function() {
    let OrderInfo = ["ITEM0013 x 4"];
    var OutputSheet = bestCharge(OrderInfo);
    var expect_result =  `
============= 订餐明细 =============
肉夹馍 x 4 = 24元
-----------------------------------
总计：24元
===================================`.trim();
    expect(expect_result).to.eql(OutputSheet);
  });

});
