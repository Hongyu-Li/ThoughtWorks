// Task 5
var getTotalCharge = require('./total-charge.js');
var getChargeSheet= require('./charge-sheet.js');
var getBestCharge = require('./best-charge-info.js');

function bestCharge(OrderInfo,ItemsInfo,PromInfo){
  output = '============= 订餐明细 =============\n';
  ChargeSheet = getChargeSheet(OrderInfo,ItemsInfo);
  BestChargeInfo = getBestCharge(ChargeSheet,PromInfo);

  for (var i=0; i < ChargeSheet.length; i++) {
    output += ChargeSheet[i]['name'] + ' x ' + ChargeSheet[i]['count']
              + ' = ' + ChargeSheet[i]['itemprice'] + '元\n';
  };
  output += '-----------------------------------\n';
  if (BestChargeInfo['type']!='无优惠'){
    if (Object.keys(BestChargeInfo).length != 5){
      output += '使用优惠:\n' + BestChargeInfo['type'] + '，' + '省' +
                BestChargeInfo['savecharge'] + '元\n';
    } else {
      prom_items_name = BestChargeInfo['promitems'].reduce(function(a,b){return a + '，' + b});
      output += '使用优惠:\n' + BestChargeInfo['type'] + '(' + prom_items_name + ')，' + '省' +
                BestChargeInfo['savecharge'] + '元\n';
    };

    output += '-----------------------------------\n';
  };

  output += '总计：' + BestChargeInfo['bestcharge'] + '元\n'
            + '===================================';
  return output;
};

module.exports = bestCharge;
