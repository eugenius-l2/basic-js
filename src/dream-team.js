const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let teamName = [];

  members.forEach(el => {
    if (typeof el === 'string') {
      let name = el.trim();
      teamName.push(name[0][0].toUpperCase()); 
    }
  })
  
  return teamName.sort().join('');
};
