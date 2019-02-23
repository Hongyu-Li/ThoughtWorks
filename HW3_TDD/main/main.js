function taxi_fee(distance,waiting_time=0) {
  let mile_fee = 6;
  if (distance > 2 && distance <= 8) {
    mile_fee += (distance-2)*0.8;
  }
  if (distance > 8) {
    mile_fee += 4.8 + (distance-8)*0.8*1.5;
  }
  return Math.round(mile_fee + 0.25*waiting_time)
}

module.exports = taxi_fee;
