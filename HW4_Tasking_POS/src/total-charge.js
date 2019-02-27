// Task 3: generate total charge sheet w promotions.

function getTotalCharge(ChargeSheet,PromInfo){
  var totalcharge = 0;
  var savecharge = 0;
  var promitems = {};
  for (var i=0; i < ChargeSheet.length; i++){
    if (PromInfo[0]['barcodes'].includes(ChargeSheet[i]['barcode'])){
      if (ChargeSheet[i]['count']>=3){
        nums_gift = parseInt(ChargeSheet[i]['count']/3);
        promitems[ChargeSheet[i]['name']] = nums_gift;
        ChargeSheet[i]['itemprice'] -= ChargeSheet[i]['price']*nums_gift;
        savecharge += ChargeSheet[i]['price']*nums_gift;
      };
    };
    totalcharge += ChargeSheet[i]['itemprice'];
  };

  if (savecharge!=0){
    return {type: PromInfo[0]['type'],
            promitems: promitems,
            totalcharge: Number(parseFloat(totalcharge).toFixed(2)),
            savecharge: Number(parseFloat(savecharge).toFixed(2))};
  } else {
    return {type: 'None',
            totalcharge: Number(parseFloat(totalcharge).toFixed(2))};
  };
};

module.exports = getTotalCharge;
