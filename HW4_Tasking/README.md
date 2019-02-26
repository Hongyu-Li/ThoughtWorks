## Task Analysis
This analysis is conducted by Hongyu Li.

### Global Analysis
Input:
  OrderInfo: Array[string]
Output:
  Formattable Result
  ```
  ============= 订餐明细 =============
  黄焖鸡 x 1 = 18元
  肉夹馍 x 2 = 12元
  凉皮 x 1 = 8元
  -----------------------------------
  使用优惠:
  指定菜品半价(黄焖鸡，凉皮)，省13元
  -----------------------------------
  总计：25元
  ===================================
  ```

### Task Decomposition
#### Task 1: Get information of all items(id, name and price) and promotions(type and items).
* loadAllItems():
- Input:
    None
- Output:
    ItemsInfo: Array[{id: string,
                      name: string,
                      price: number}]

* loadPromotions():
- Input:
    None
- Output:
    PromInfo: Array[{type: string,
                     items: [string]}]


#### Task 2: Get total charge w/o promotions.
* getTotalCharge():
- Input:
    OrderInfo: Array[string]
    ItemsInfo: loadAllItems()
- Output:
    ItemsChargeSheet: Array[{name: string, count: number, itemprice:number}]
    TotalCharge: number


#### Task 3: Get best charge by using promotions.
* getBestCharge():
- Input:
    TotalCharge: number
    PromInfo: loadPromotions()
- Output:
    BestChargeInfo: {type: string,
                     bestcharge: number,
                     savecharge: number}


#### Task 4: Print out a formattable result.
* bestCharge():
- Input:
    OrderInfo: Array[string]
    ItemsInfo: loadAllItems()
    PromInfo: Array[{type: string,
                     items: [string]}]
- Output:
    ItemsChargeSheet, TotalCharge: getTotalCharge(OrderInfo, ItemsInfo)
    BestChargeInfo: getBestCharge(TotalCharge,PromInfo)
