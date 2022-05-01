const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr) {
    let arrdepth = Array.isArray(arr)
    if (arrdepth) {
      arrdepth = 1 + Math.max(0,...arr.map(this.calculateDepth.bind(this)))
    } else {0} 

      return arrdepth
}
}

module.exports = {
  DepthCalculator
};
