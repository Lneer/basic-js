const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainlink : [],
  getLength() {
    {return (this.chainlink.length) }
  },
  addLink(elem) {
    if (arguments.length == 0) {this.chainlink.push(`( )`)}
    else {
      elem = String(elem) 
      this.chainlink.push(`( ${elem} )`)}
    return this
  },

  removeLink(chainindex) {

   if ( (typeof(chainindex) != 'number') || (!Number.isInteger(chainindex)) || (chainindex <= 0) || (chainindex >= this.chainlink.length) ) {
    this.chainlink.length  = 0
     throw new Error('You can\'t remove incorrect link!')
    }
   
    this.chainlink.splice(chainindex-1,1)
    return this
  },

  reverseChain() {
    this.chainlink.reverse()
    return this
  },

  finishChain() {
    let result = this.chainlink.join("~~")
  this.chainlink =[]
  return(result) 
  }
};

module.exports = {
  chainMaker
};
