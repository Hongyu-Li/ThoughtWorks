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
<pre>
loadAllItems():
- Input:  
    None
- Output:  
  ItemsInfo: Array[{id: string,  
                    name: string,  
                    price: number}]
</pre>


<pre>
loadPromotions():
- Input:  
    None
- Output:  
    PromInfo: Array[{type: string,  
                     items: [string]}]
</pre>

#### Task 2: Get items charge sheet w/o promotions.
<pre>
getChargeSheet():
- Input:
    OrderInfo: Array[string]
    ItemsInfo: loadAllItems()
- Output:  
    ChargeSheet: {id:string, name: string, count: number, itemprice:number}  
</pre>

#### Task 3: Calculate total charge based on items charge sheet.
<pre>
getTotalCharge():
- Input:
    ChargeSheet: getChargeSheet()
- Output:  
    TotalCharge: number  
</pre>

#### Task 4: Get best charge by using promotions.
<pre>
getBestCharge():
- Input:  
    ChargeSheet: getChargeSheet()  
    PromInfo: loadPromotions()
- Output:  
    BestChargeInfo: {type: string,  
                     bestcharge: number,  
                     savecharge: number,
                     totalcharge: number}
</pre>


#### Task 5: Print out a formattable result.
<pre>
bestCharge():
- Input:  
    OrderInfo: Array[string]  
    ItemsInfo: loadAllItems()  
    PromInfo: Array[{type: string,  
                     items: [string]}]
- Output:  
    ChargeSheet: getChargeSheet(OrderInfo, ItemsInfo)  
    BestChargeInfo: getBestCharge(ChargeSheet,PromInfo)
</pre>
