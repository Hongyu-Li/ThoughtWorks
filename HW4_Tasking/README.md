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

#### Task 2: Get charge sheet w/o promotions.
<pre>
getChargeSheet():
- Input:
    OrderInfo: Array[string]
    ItemsInfo: loadAllItems()
- Output:  
    ChargeSheet: Array[ItemsCharge: {id:string, name: string, count: number,      
                       itemprice:number}, TotalCharge: number]  
</pre>

#### Task 3: Get best charge by using promotions.
<pre>
getBestCharge():
- Input:  
    ItemsChargeSheet: number  
    PromInfo: loadPromotions()
- Output:  
    BestChargeInfo: {type: string,  
                     bestcharge: number,  
                     savecharge: number}
</pre>


#### Task 4: Print out a formattable result.
<pre>
bestCharge():
- Input:  
    OrderInfo: Array[string]  
    ItemsInfo: loadAllItems()  
    PromInfo: Array[{type: string,  
                     items: [string]}]
- Output:  
    ItemsChargeSheet, TotalCharge: getTotalCharge(OrderInfo, ItemsInfo)  
    BestChargeInfo: getBestCharge(TotalCharge,PromInfo)
</pre>
