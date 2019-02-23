function taxi_fee(distance) {
  if (distance <= 2) {
    return 6;
  }
  else if (distance <= 8) {
    return Math.round(6+(distance-2)*0.8);
  }
}

module.exports = taxi_fee;
