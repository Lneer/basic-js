const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  
  let resultObj = {}

  for (let i = 0;i<domains.length;i++){
    let subDomain = ""

    while(domains[i].length !==0){
      if (subDomain ==""){
        subDomain = "."+ domains[i].substring(domains[i].lastIndexOf(".")+1, domains[i].length)
      } else{ 
        subDomain = subDomain +"." + domains[i].substring(domains[i].lastIndexOf(".")+1, domains[i].length)
      }
      
      domains[i] = domains[i].substring(0, domains[i].lastIndexOf(".") )
      
      if (!(subDomain in resultObj)){
        resultObj[subDomain] = 1
      }else {
        resultObj[subDomain] +=1
      }

    } 
  }
  return resultObj

}


module.exports = {
  getDNSStats
};
