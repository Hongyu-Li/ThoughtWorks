function taxi_fee(distance,waiting_time=0) {
  if (distance <= 2) {
    return Math.round(6+0.25*waiting_time);
  }
  else if (distance <= 8) {
    return Math.round(6+(distance-2)*0.8);
  }
  else{
    return Math.round(10.8+(distance-8)*0.8*1.5);
  }
}

module.exports = taxi_fee;
