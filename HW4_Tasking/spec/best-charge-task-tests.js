// Task Tests In Steps
var expect = require('chai').expect;
var loadAllItems = require('../src/items.js');
var loadPromotions = require('../src/promotions.js');
var getChargeSheet = require('../src/charge-sheet.js');
var getTotalCharge = require('../src/total-charge.js');
var getBestCharge = require('../src/best-charge-info.js');
var bestCharge = require('../src/best-charge.js');

describe('Tests of Tasking Analysis', function() {

  it("returns items charge sheet", function() {
    let OrderInfo = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    var ItemsInfo = loadAllItems();
    var ChargeSheet = getChargeSheet(OrderInfo, ItemsInfo);
    var sheet_expect_result = [{id: 'ITEM0001', name: '黄焖鸡', count: 1, itemprice: 18},
                               {id: 'ITEM0013', name: '肉夹馍', count: 2, itemprice: 12},
                               {id: 'ITEM0022', name: '凉皮', count: 1, itemprice: 8}];
    expect(sheet_expect_result).to.eql(ChargeSheet);
  });

  it("returns total charge given a charge sheet w/o promotions", function() {
    let OrderInfo = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    var ItemsInfo = loadAllItems();
    var ChargeSheet = getChargeSheet(OrderInfo, ItemsInfo);
    var TotalCharge = getTotalCharge(ChargeSheet);
    var expect_result = 38;
    expect(expect_result).to.equal(TotalCharge);
  });

  it("returns best charge w promotion 2", function() {
    let OrderInfo = ["ITEM0013 x 4", "ITEM0022 x 1"];
    var ItemsInfo = loadAllItems();
    var ChargeSheet = getChargeSheet(OrderInfo, ItemsInfo);
    var PromInfo = loadPromotions();
    var BestChargeInfo = getBestCharge(ChargeSheet,PromInfo);
    var expect_result = {type: '满30减6元',
                         bestcharge: 26,
                         savecharge: 6,
                         totalcharge: 32};
    expect(expect_result).to.eql(BestChargeInfo);
  });

  it("returns best charge w promotion 1", function() {
    let OrderInfo = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    var ItemsInfo = loadAllItems();
    var ChargeSheet = getChargeSheet(OrderInfo, ItemsInfo);
    var PromInfo = loadPromotions();
    var BestChargeInfo = getBestCharge(ChargeSheet,PromInfo);
    var expect_result = {type: '指定菜品半价',
                         bestcharge: 25,
                         savecharge: 13,
                         totalcharge: 38,
                         promitems: ['黄焖鸡','凉皮']};
    expect(expect_result).to.eql(BestChargeInfo);
  });

  it("returns best charge w/o promotions", function() {
    let OrderInfo = ["ITEM0013 x 4"];
    var ItemsInfo = loadAllItems();
    var ChargeSheet = getChargeSheet(OrderInfo, ItemsInfo);
    var PromInfo = loadPromotions();
    var BestChargeInfo = getBestCharge(ChargeSheet,PromInfo);
    var expect_result = {type: '无优惠',
                         bestcharge: 24,
                         savecharge: 0,
                         totalcharge: 24};
    expect(expect_result).to.eql(BestChargeInfo);
  });

  it("returns formattable output w propmotion 1", function() {
    let OrderInfo = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    //var ItemsInfo = loadAllItems();
    //var PromInfo = loadPromotions();
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

  it("returns formattable output w promotion 2", function() {
    let OrderInfo = ["ITEM0013 x 4", "ITEM0022 x 1"];
    //var ItemsInfo = loadAllItems();
    //var PromInfo = loadPromotions();
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

  it("returns formattable output w/o promotions", function() {
    let OrderInfo = ["ITEM0013 x 4"];
    //var ItemsInfo = loadAllItems();
    //var PromInfo = loadPromotions();
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
