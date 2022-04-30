const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName ="";
  if (!Array.isArray(members)){return false}
  let correctMembers = members.filter((elem) => typeof(elem)=="string")

  if (correctMembers.length == 0) return false
  else {  
    correctMembers = correctMembers.map((elem)=>elem.trim().toUpperCase())
    correctMembers.sort().map((elem) => {
        teamName += elem[0].toUpperCase()}) 
    
  }
  return teamName
}

module.exports = {
  createDreamTeam
};
