## Task Analysis
This analysis is conducted by Hongyu Li.

### Global Analysis
Input:
  PurchaseInfo: Array[string]
Output:
  Formattable Result
  ```
  ***<没钱赚商店>购物清单***
  名称：可口可乐，数量：3瓶，单价：3.00(元)，小计：6.00(元)
  名称：羽毛球，数量：5个，单价：1.00(元)，小计：4.00(元)
  名称：苹果，数量：2斤，单价：5.50(元)，小计：11.00(元)
  ----------------------
  挥泪赠送商品：
  名称：可口可乐，数量：1瓶
  名称：羽毛球，数量：1个
  ----------------------
  总计：21.00(元)
  节省：4.00(元)
  **********************
  ```

### Task Decomposition
#### Task 1: Get information of all items(id, name and price) and promotions(type and items).
<pre>
loadAllItems():
- Input:  
    None
- Output:  
  ItemsInfo: Array[{barcode: string,
                    name: string,
                    unit: string,
                    price: number}]
</pre>


<pre>
loadPromotions():
- Input:  
    None
- Output:  
    PromInfo: Array[{type: string,
                     barcodes: array}]
</pre>


#### Task 2: Get items charge sheet w/o promotions.
<pre>
getChargeSheet():
- Input:
    PurchaseInfo: Array[string]
    ItemsInfo: loadAllItems()
- Output:  
    ChargeSheet: Array[{barcode:string,
                        name: string,
                        count: number
                        unit: string,
                        itemprice:number}]  
</pre>


#### Task 3: Get total charge information based on items charge sheet w promitions.
<pre>
getTotalCharge():
- Input:
    ChargeSheet: getChargeSheet()
    PromInfo: loadPromotions()
- Output:  
    TotalChargeInfo: Array[{type: string,
                            name: string,
                            count: number,
                            unit: string,
                            totalcharge: number,
                            savecharge: number}]
</pre>


#### Task 4: Print out a formattable result.
<pre>
printInventory():
- Input:  
    PurchaseInfo: Array[string]
    ItemsInfo: loadAllItems()
    PromInfo: loadPromotions()
- Output:  
    ChargeSheet: getChargeSheet(PurchaseInfo)
    TotalChargeInfo: getTotalCharge(ChargeSheet)
</pre>
