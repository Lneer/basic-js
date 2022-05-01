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

  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  let resultArr =[]

  for (let i = 0; i < arr.length; i++){
    //if(arr[i] !== "--discard-next" || arr[i] !== "--discard-prev"|| arr[i] !== "--double-next"|| arr[i] !== "--double-prev" ) {resultArr.push(arr[i])}
    // if (arr[i] == "--discard-next"){ 
    //     if (i < arr.length-1) {i++} 
    // } else if(arr[i] == "--discard-prev"){
    //     if (i>0){resultArr.pop();}
    // } else if (arr[i] == "--double-next" ) {
    //     if (i < arr.length-1){resultArr.push(arr[i+1])}
    // } else if(arr[i] == "--double-prev"){
    //     if (i>0){resultArr.push(resultArr[resultArr.length-1])} ;
    // } else if(arr[i] !== "--discard-next" && arr[i] !== "--discard-prev"&& arr[i] !== "--double-next"&& arr[i] !== "--double-prev" ) {resultArr.push(arr[i])}
    if (arr[i] == "--discard-next"){
            if (i < arr.length-1 ) {
                resultArr.push("empty") 
                i++}
    } else if(arr[i] == "--discard-prev"){
           if (i > 0 && resultArr[resultArr.length -1] !== "empty") {resultArr.pop();}
    }else if (arr[i] == "--double-next" ) {
          if (i < arr.length-1){resultArr.push(arr[i+1])}
    } else if(arr[i] == "--double-prev"){
          if (i>0){resultArr.push(resultArr[resultArr.length-1])} ;
    } else if(arr[i] !== "--discard-next" && arr[i] !== "--discard-prev"&& arr[i] !== "--double-next"&& arr[i] !== "--double-prev" ) {resultArr.push(arr[i])}

    console.log(resultArr)
  }
  resultArr = resultArr.filter((elem) => elem !== "empty")

  return resultArr
}
arr = [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]
aa = transform(arr)
//console.log(aa)


module.exports = {
  transform
};
