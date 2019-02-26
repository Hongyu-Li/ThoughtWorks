var expect = require('chai').expect;
var loadAllItems = require('../src/items.js')
var loadPromotions = require('../src/promotions.js')
var getItemsCharge = require('../src/items-charge.js')
var getTotalCharge = require('../src/total-charge.js')
var getBestCharge = require('../src/best-charge-info.js')

describe('calculate items charge', function() {

  it("returns items charge w/o promotions", function() {
    let OrderInfo = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    var ItemsInfo = loadAllItems();
    var ItemsChargeSheet = getItemsCharge(OrderInfo, ItemsInfo);
    var sheet_expect_result = [{id: 'ITEM0001', name: '黄焖鸡', count: 1, itemprice: 18},
                               {id: 'ITEM0013', name: '肉夹馍', count: 2, itemprice: 12},
                               {id: 'ITEM0022', name: '凉皮', count: 1, itemprice: 8}];
    expect(sheet_expect_result).to.eql(ItemsChargeSheet);
  });

  it("returns total charge w/o promotions", function() {
    let OrderInfo = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    var ItemsInfo = loadAllItems();
    var ItemsChargeSheet = getItemsCharge(OrderInfo, ItemsInfo);
    var TotalCharge = getTotalCharge(ItemsChargeSheet);
    var expect_result = 38;
    expect(expect_result).to.equal(TotalCharge);
  });

  it("returns best charge w promotion 2", function() {
    let OrderInfo = ["ITEM0013 x 4", "ITEM0022 x 1"];
    var ItemsInfo = loadAllItems();
    var ItemsChargeSheet = getItemsCharge(OrderInfo, ItemsInfo);
    var TotalCharge = getTotalCharge(ItemsChargeSheet);
    var PromInfo = loadPromotions();
    var BestChargeInfo = getBestCharge(TotalCharge,PromInfo);
    var expect_result = {type: '满30减6元',
                         bestcharge: 26,
                         savecharge: 6};
    expect(expect_result).to.eql(BestChargeInfo);
  });

  it("returns best charge w promotion 1", function() {
    let OrderInfo = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    var ItemsInfo = loadAllItems();
    var ItemsChargeSheet = getItemsCharge(OrderInfo, ItemsInfo);
    var TotalCharge = getTotalCharge(ItemsChargeSheet);
    var PromInfo = loadPromotions();
    var BestChargeInfo = getBestCharge(TotalCharge,PromInfo);
    var expect_result = {type: '指定菜品半价',
                         bestcharge: 25,
                         savecharge: 13};
    expect(expect_result).to.eql(BestChargeInfo);
  });

});
