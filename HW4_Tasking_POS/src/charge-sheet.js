// Task 2: generate charge sheet w/o promotions.

function getChargeSheet(PurchaseInfo,ItemsInfo){
  var items_array = {};
  var ChargeSheet = [];
  //Task 2-1: get items count sheet.
  for (var i=0; i < PurchaseInfo.length; i++){
    if (PurchaseInfo[i].includes('-')){
      items_info = PurchaseInfo[i].split('-');
      items_array[items_info[0]] = Number(items_info[1]);
    } else {
      if (Object.keys(items_array).includes(PurchaseInfo[i])){
        items_array[PurchaseInfo[i]] += 1;
      } else {
        items_array[PurchaseInfo[i]] = 1;
      };
    };
  };

  //Task 2-2: get charge sheet.
  Object.keys(items_array).forEach(
    function(key){
      ind = ItemsInfo.map(function(obj){return obj['barcode']}).indexOf(key);
      temp_info = ItemsInfo[ind];
      record = {barcode: key,
                name: temp_info['name'],
                price: temp_info['price'],
                count: items_array[key],
                unit: temp_info['unit'],
                itemprice: temp_info['price']*items_array[key]};
      ChargeSheet.push(record);
    });
  return ChargeSheet;
};

module.exports = getChargeSheet;
