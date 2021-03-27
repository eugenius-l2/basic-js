const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    arr.map(item => {
      if (item instanceof Array) {
        depth = Math.max(this.calculateDepth(item), depth);
      }
    });
    return depth + 1;
  }
};