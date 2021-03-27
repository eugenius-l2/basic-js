const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const K = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !parseFloat(sampleActivity) || typeof Number(sampleActivity) !== 'number') return false; 

  samAct = parseFloat(sampleActivity);

  if (MODERN_ACTIVITY <= samAct || samAct < 0) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / samAct) / K);
};
