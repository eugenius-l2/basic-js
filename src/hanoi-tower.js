const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const sec = 3600;
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor(turns / (turnsSpeed / sec));
  return {
    "turns": turns,
    "seconds": seconds
  }
};
