const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {

  let nArr = String(n).split("")

  while (nArr.length !== 1){
    nArr = nArr.reduce(function(a,b) {return(+a + +b)})
    nArr = String(nArr).split("")
  }
  return +nArr
}
let n = 91
aa = getSumOfDigits(n)
console.log(aa)
module.exports = {
  getSumOfDigits
};
