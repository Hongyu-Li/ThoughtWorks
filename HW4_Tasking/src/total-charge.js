// Task 2
function getTotalCharge(ItemsChargeSheet){
  price_array = ItemsChargeSheet.map(function(obj){return obj['itemprice']});
  return price_array.reduce(function(a,b){return a+b});
};

module.exports = getTotalCharge;
