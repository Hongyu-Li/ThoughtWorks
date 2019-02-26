// Task 2
function getChargeSheet(OrderInfo, ItemsInfo){
    var ItemsChargeSheet = [];
    var TotalCharge = 0;
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
      TotalCharge += record['itemprice']
    };
    return {ItemsCharge: ItemsChargeSheet, TotalCharge: TotalCharge};
};

module.exports = getChargeSheet;
