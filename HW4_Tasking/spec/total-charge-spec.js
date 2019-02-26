var expect = require('chai').expect;
var loadAllItems = require('../src/items.js')
var getItemsCharge = require('../src/best-charge.js')

describe('calculate items charge', function() {

  it("returns total charge w/o promotions", function() {
    let OrderInfo = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    var ItemsInfo = loadAllItems();
    var ItemsChargeSheet = getItemsCharge(OrderInfo, ItemsInfo);
    var sheet_expect_result = [{id: 'ITEM0001', name: '黄焖鸡', count: 1, itemprice: 18},
                               {id: 'ITEM0013', name: '肉夹馍', count: 2, itemprice: 12},
                               {id: 'ITEM0022', name: '凉皮', count: 1, itemprice: 8}];
    expect(sheet_expect_result).to.eql(ItemsChargeSheet);
  });
});
