// Task 3
function getBestCharge(TotalCharge,PromInfo){
  best_charge = TotalCharge
  if (TotalCharge >= 30){
    best_charge = TotalCharge - 6
    return 
  };
};

module.exports = getBestCharge;
