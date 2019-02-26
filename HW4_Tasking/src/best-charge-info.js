// Task 4
var  getTotalCharge = require('../src/total-charge.js');

function getBestCharge(ChargeSheet,PromInfo){
  TotalCharge = getTotalCharge(ChargeSheet);
  items_prom = PromInfo[1]['items'];
  BestChargeInfo = {type: '无优惠', bestcharge: TotalCharge,
                    savecharge: 0, totalcharge: TotalCharge};

  if (TotalCharge >= 30){
    BestChargeInfo['type'] = PromInfo[0]['type'];
    BestChargeInfo['bestcharge'] = TotalCharge -6;
    BestChargeInfo['savecharge'] = 6;
  };

  var ChargeSheet_copy = JSON.parse(JSON.stringify(ChargeSheet)); //deep clone
  var items_prom_name = [];
  for (var i=0; i < ChargeSheet_copy.length; i++) {
    if (items_prom.includes(ChargeSheet_copy[i]['id'])){
      ChargeSheet_copy[i]['itemprice'] /= 2;
      items_prom_name.push(ChargeSheet_copy[i]['name']);
    };
  };

  if (getTotalCharge(ChargeSheet_copy) < BestChargeInfo['bestcharge']){
    BestChargeInfo['type'] = PromInfo[1]['type'];
    BestChargeInfo['bestcharge'] = getTotalCharge(ChargeSheet_copy);
    BestChargeInfo['savecharge'] = TotalCharge - BestChargeInfo['bestcharge'];
    BestChargeInfo['promitems'] = items_prom_name;
  };

  return BestChargeInfo;
};

module.exports = getBestCharge;
