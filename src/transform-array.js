const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  try {
    Array.isArray(arr);
  } catch (e) {
    if (e instanceof Error) {
      throw new Error("'arr' parameter must be an instance of the Array!");
    } else {
      throw e; // re-throw the error unchanged
    }
  }

  let resultArr =[]
  let seqIndex = arr.findIndex((elem) => typeof(elem) =="string")
  if (seqIndex ==-1) return resultArr 
  
  if (arr[seqIndex] == "--discard-next") {
    if (seqIndex !== arr.length -1) {
      resultArr = arr.slice(0,seqIndex).concat(arr.slice(seqIndex+2,arr.length ))
      transform(resultArr)
    } else {
      resultArr =  arr.slice(0,arr.length -1)
      transform(resultArr)
    }
}
  else if (arr[seqIndex] == "--double-next") {
    if (seqIndex !== arr.length -1) {
      resultArr = arr.slice(0,seqIndex)
      resultArr.push(arr[seqIndex+1])
      resultArr = resultArr.concat(arr.slice(seqIndex+1,arr.length ))
      transform(resultArr)
    } else {
      resultArr = arr.slice(0,arr.length -1)
      transform(resultArr)}
      
 }
  else if (arr[seqIndex] == "--discard-prev") {
    if (seqIndex !== 0) {
      resultArr = arr.slice(0,seqIndex)
      resultArr.pop(arr[seqIndex-1])
      resultArr = resultArr.concat(arr.slice(seqIndex+1,arr.length ))
      transform(resultArr)
    } else {
      resultArr =  arr.slice(1,arr.length)
      transform(resultArr)}
      
 }
   else if (arr[seqIndex] == "--double-prev") {
    if (seqIndex !== 0) {
      resultArr = arr.slice(0,seqIndex)
      resultArr.push(arr[seqIndex-1])
      resultArr = resultArr.concat(arr.slice(seqIndex+1,arr.length ))
      transform(resultArr)
    } else {
      resultArr = arr.slice(1,arr.length)
      transform(resultArr)}
 }
}

module.exports = {
  transform
};
