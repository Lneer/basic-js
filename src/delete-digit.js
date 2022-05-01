const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let nStr = String(n)
  let nArr = nStr.split("")
  //nArr.forEach(elem => +elem)
  console.log(nArr)
  let maxArr = []
  for (let i=0; i<nArr.length; i++){
    let bufArr=[]
    bufArr = nArr.slice(0,i).concat(nArr.slice(i+1,nArr.length ))
    maxArr.push(bufArr) 
  }
  console.log(maxArr)
  let sumArr=[]
  for (let i=0; i < maxArr.length; i++){
    //maxArr[i].reduce(function(a,b) {return (a + b)})
    let sumResult = ""
    for(let j=0; j < maxArr[i].length; j++){
      sumResult = sumResult + maxArr[i][j]
    }
    console.log(sumResult)
    sumArr.push(+sumResult)
  }
  let max = Math.max.apply(null,sumArr )
  return max
}



module.exports = {
  deleteDigit
};
