// Task Tests In Steps
var expect = require('chai').expect;
var loadAllItems = require('../main/database.js')['loadAllItems'];
var loadPromotions = require('../main/database.js')['loadPromotions'];
var getChargeSheet = require('../src/charge-sheet.js');
var getTotalCharge = require('../src/total-charge.js');
var printInventory = require('../main/main.js');

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

  it("returns total charge information w promotions", function() {
    let PurchaseInfo = ['ITEM000001','ITEM000001','ITEM000001','ITEM000001',
                        'ITEM000001','ITEM000003-2','ITEM000005','ITEM000005',
                        'ITEM000005'];
    var ItemsInfo = loadAllItems();
    var PromInfo = loadPromotions();
    var ChargeSheet = getChargeSheet(PurchaseInfo, ItemsInfo);
    var TotalChargeInfo = getTotalCharge(ChargeSheet,PromInfo);
    var expect_result = {type: 'BUY_TWO_GET_ONE_FREE',
                         promitems: {'雪碧': '1瓶', '方便面': '1袋'},
                         totalcharge: 51.00,
                         savecharge: 7.50};
    expect(expect_result).to.eql(TotalChargeInfo);
  });

  it("returns total charge information w promitions(correct nums of gifts)", function() {
    let PurchaseInfo = ['ITEM000001','ITEM000001','ITEM000001','ITEM000001',
                        'ITEM000001','ITEM000001','ITEM000003-2','ITEM000005',
                        'ITEM000005','ITEM000005'];
    var ItemsInfo = loadAllItems();
    var PromInfo = loadPromotions();
    var ChargeSheet = getChargeSheet(PurchaseInfo, ItemsInfo);
    var TotalChargeInfo = getTotalCharge(ChargeSheet,PromInfo);
    var expect_result = {type: 'BUY_TWO_GET_ONE_FREE',
                         promitems: {'雪碧': '2瓶', '方便面': '1袋'},
                         totalcharge: 51.00,
                         savecharge: 10.50};
    expect(expect_result).to.eql(TotalChargeInfo);
  });

  it("returns total charge information w/o promitions", function() {
    let PurchaseInfo = ['ITEM000003-2'];
    var ItemsInfo = loadAllItems();
    var PromInfo = loadPromotions();
    var ChargeSheet = getChargeSheet(PurchaseInfo, ItemsInfo);
    var TotalChargeInfo = getTotalCharge(ChargeSheet,PromInfo);
    var expect_result = {type: 'None',
                         totalcharge: 30.00};
    expect(expect_result).to.eql(TotalChargeInfo);
  });

  it("returns formattable result w promotions", function() {
    let PurchaseInfo = ['ITEM000001','ITEM000001','ITEM000001','ITEM000001',
                        'ITEM000001','ITEM000003-2','ITEM000005','ITEM000005',
                        'ITEM000005'];
    var InventorySheet = printInventory(PurchaseInfo);
    var expect_result =
            '***<没钱赚商店>购物清单***\n' +
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '名称：雪碧，数量：1瓶\n' +
            '名称：方便面，数量：1袋\n' +
            '----------------------\n' +
            '总计：51.00(元)\n' +
            '节省：7.50(元)\n' +
            '**********************';
    expect(expect_result).to.eql(InventorySheet);
  });

  it("returns formattable result w/o promotions", function() {
    let PurchaseInfo = ['ITEM000003-2'];
    var InventorySheet = printInventory(PurchaseInfo);
    var expect_result =
            '***<没钱赚商店>购物清单***\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '----------------------\n' +
            '总计：30.00(元)\n' +
            '**********************';
    expect(expect_result).to.eql(InventorySheet);
  });

  it("returns formattable result w promitions(correct nums of gifts)", function() {
    let PurchaseInfo = ['ITEM000001','ITEM000001','ITEM000001','ITEM000001',
                        'ITEM000001','ITEM000001','ITEM000003-2','ITEM000005',
                        'ITEM000005','ITEM000005'];
    var InventorySheet = printInventory(PurchaseInfo);
    var expect_result =
            '***<没钱赚商店>购物清单***\n' +
            '名称：雪碧，数量：6瓶，单价：3.00(元)，小计：12.00(元)\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '名称：雪碧，数量：2瓶\n' +
            '名称：方便面，数量：1袋\n' +
            '----------------------\n' +
            '总计：51.00(元)\n' +
            '节省：10.50(元)\n' +
            '**********************';
    expect(expect_result).to.eql(InventorySheet);
  });

});
