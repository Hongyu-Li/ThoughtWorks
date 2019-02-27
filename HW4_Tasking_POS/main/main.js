// Task 4: main.js
var loadAllItems = require('../main/database.js')['loadAllItems'];
var loadPromotions = require('../main/database.js')['loadPromotions'];
var getChargeSheet = require('../src/charge-sheet.js');
var getTotalCharge = require('../src/total-charge.js');

function printInventory(PurchaseInfo){
  ItemsInfo = loadAllItems();
  PromInfo = loadPromotions();
  ChargeSheet = getChargeSheet(PurchaseInfo,ItemsInfo);
  TotalChargeInfo = getTotalCharge(ChargeSheet,PromInfo);
  var output = '***<没钱赚商店>购物清单***\n';
  for (var i=0; i < ChargeSheet.length; i++){
    output += '名称：' + ChargeSheet[i]['name'] + '，数量：' + ChargeSheet[i]['count'] +
              ChargeSheet[i]['unit'] + '，单价：' + parseFloat(ChargeSheet[i]['price']).toFixed(2)
              +'(元)' + '，小计：' + parseFloat(ChargeSheet[i]['itemprice']).toFixed(2) + '(元)\n';
  };
  output += '----------------------\n';
  if (TotalChargeInfo['type']!='None'){
    output += '挥泪赠送商品：\n';
    lines = '';
    Object.keys(TotalChargeInfo['promitems']).forEach(
      function(key){
         return lines += '名称：' + key + '，数量：' + TotalChargeInfo['promitems'][key] + '\n';
      });
      output += lines;
      output += '----------------------\n'
    };
  output += '总计：' + parseFloat(TotalChargeInfo['totalcharge']).toFixed(2) + '(元)\n';
  if (TotalChargeInfo['type']!='None'){
    output += '节省：' + parseFloat(TotalChargeInfo['savecharge']).toFixed(2) + '(元)\n';
  };
  output += '**********************';
  return output;
};

module.exports = printInventory;
