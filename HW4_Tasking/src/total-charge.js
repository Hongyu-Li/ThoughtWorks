function getTotalCharge(OrderInfo, ItemsInfo){
  let ItemsChargeSheet = [{id: 'ITEM0001', name: '黄焖鸡', count: 1, itemprice: 18},
                          {id: 'ITEM0013', name: '肉夹馍', count: 2, itemprice: 12},
                          {id: 'ITEM0022', name: '凉皮', count: 1, itemprice: 8}];
  return ItemsChargeSheet;
};

module.exports = getTotalCharge;
