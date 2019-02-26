// Task 3
function getBestCharge(ChargeSheet,PromInfo){
  TotalCharge = ChargeSheet['TotalCharge'];
  ItemsCharge = ChargeSheet['ItemsCharge'];
  items_prom = PromInfo[1]['items']
  if (TotalCharge >= 30){
    prom_charge1 = TotalCharge - 6;
  };

  for (var i=0; i < ItemsCharge.length; i++) {
    if items_prom.includes(ItemsCharge[i]['id']){
      ItemsCharge[i]['itemprice'] /= 2
      prom_charge2 = 
    }
  };

  return {type: '满30减6元',
          bestcharge: prom_charge1,
          savecharge: 6};
};

module.exports = getBestCharge;
