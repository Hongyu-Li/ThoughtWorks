function getItemsCharge(OrderInfo, ItemsInfo){
  var ItemsChargeSheet = []
  for (var i=0; i < OrderInfo.length; i++){
    order = OrderInfo[i].split('x');
    id =  order[0].trim();
    count = Number(order[1].trim());
    id_array = ItemsInfo.map(function(obj){return obj['id']});
    item_info = ItemsInfo[id_array.indexOf(id)];
    record = {id: id,
              name: item_info['name'],
              count: count,
              itemprice:  item_info['price']*count};
    ItemsChargeSheet.push(record);
  }
  return ItemsChargeSheet;
};

module.exports = getItemsCharge;
