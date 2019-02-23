function taxi_fee(distance) {
  if (distance <= 2) {
    return 6;
  }
  else if (distance <= 8) {
    return Math.round(6+(distance-2)*0.8);
  }
  else{
    return Math.round(10.8+(distance-8)*0.8*1.5);
  }
}

module.exports = taxi_fee;
