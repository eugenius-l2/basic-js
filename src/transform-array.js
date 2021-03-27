const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const flagsNext = ['--discard-next', '--double-next'];
  const flagsPrev = ['--discard-prev', '--double-prev' ];
  let tmp = [];
  let resultArray = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === flagsNext[0]) {
        tmp.push('magic');
        i++;
      } else if (arr[i] === flagsNext[1]) {
        tmp.push('magic');
        if (typeof arr[i + 1] !== 'undefined') tmp.push(arr[i + 1])
      } else {
        tmp.push(arr[i]);
      }
    }
    tmp.reverse();
    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i] === flagsPrev[0]) {
        resultArray.push('magic');
        i++;
      } else if (tmp[i] === flagsPrev[1]) {
        resultArray.push('magic');
        if (typeof tmp[i + 1] !== 'undefined') resultArray.push(tmp[i + 1])
      } else {
        resultArray.push(tmp[i]);
      }
    }
  } else {
    throw 'Not an array!'
  }
  resultArray.reverse();
  return resultArray.filter(item => item !== 'magic');
};
