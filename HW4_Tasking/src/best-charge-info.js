// Task 3
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

  for (var i=0; i < ChargeSheet.length; i++) {
    if (items_prom.includes(ChargeSheet[i]['id'])){
      ChargeSheet[i]['itemprice'] /= 2;
    };
    if (getTotalCharge(ChargeSheet) < BestChargeInfo['bestcharge']){
      BestChargeInfo['type'] = PromInfo[1]['type'];
      BestChargeInfo['bestcharge'] = getTotalCharge(ChargeSheet);
      BestChargeInfo['savecharge'] = TotalCharge - BestChargeInfo['bestcharge'];
    };
  };

  return BestChargeInfo;
};

module.exports = getBestCharge;
