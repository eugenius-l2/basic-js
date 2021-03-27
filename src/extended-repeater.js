const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
  let result;

  repeatTimes = repeatTimes ? repeatTimes : 1;
  additionRepeatTimes = additionRepeatTimes ? additionRepeatTimes : 1;
  separator = separator ? separator : '+';
  additionSeparator = additionSeparator ? additionSeparator : ''; 
  addition = (addition || typeof addition == 'boolean' || typeof addition == 'object') ? Array(additionRepeatTimes)
  .fill(addition)
  .map((item, index, array) => {
    return (array.length - 1 > index) ? item + additionSeparator : item + '';
  } )
  .join('') : '';

  result =  Array(repeatTimes).fill(str);
  arr = result.map((item, index, result )=> {
   return (result.length - 1 > index) ? item + addition  + separator : item + addition;
  });

  return arr.join('');
};
  