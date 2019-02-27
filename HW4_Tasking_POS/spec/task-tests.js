// Task Tests In Steps
var expect = require('chai').expect;
var loadAllItems = require('../main/database.js')['loadAllItems'];
var loadPromotions = require('../main/database.js')['loadPromotions'];
var getChargeSheet = require('../src/charge-sheet.js');


describe('Tests of Tasking Analysis', function() {

  it("returns items charge sheet w/o promotions", function() {
    let PurchaseInfo = ['ITEM000001','ITEM000001','ITEM000001','ITEM000001',
                        'ITEM000001','ITEM000003-2','ITEM000005','ITEM000005',
                        'ITEM000005'];
    var ItemsInfo = loadAllItems();
    var ChargeSheet = getChargeSheet(PurchaseInfo, ItemsInfo);
    var expect_result = [{barcode: 'ITEM000001', name: '雪碧', price: 3.00, count: 5, unit: '瓶', itemprice: 15.00},
                         {barcode: 'ITEM000003', name: '荔枝', price: 15.00, count: 2, unit: '斤', itemprice: 30.00},
                         {barcode: 'ITEM000005', name: '方便面', price:4.50, count: 3, unit: '袋', itemprice: 13.50}];
    expect(expect_result).to.eql(ChargeSheet);
  });

});
