const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options) {
  str = String(str)

  if(!("additionRepeatTimes" in options)){ options.additionRepeatTimes = 1
  } else options.additionRepeatTimes = Number(options.additionRepeatTimes)
  if(!("repeatTimes" in options)){ options.repeatTimes = 1
  } else options.repeatTimes = Number(options.repeatTimes)
  if(!("separator" in options)){ options.separator = '+'
  }else options.separator = String(options.separator)
  console.log(options.separator)
  if(!("additionSeparator"in options)){ options.additionSeparator = '|'
  } else options.additionSeparator = String(options.additionSeparator)
  console.log(options.additionSeparator)

  // options.addition = String(options.addition)
  // options.separator = String(options.separator)
  // options.additionSeparator = String(options.additionSeparator)
  // options.additionRepeatTimes = Number(options.additionRepeatTimes)
  // options.repeatTimes = Number(options.repeatTimes)

  let additionStr =""
  let newstr =""
  console.log(options.separator)
  console.log(options.additionSeparator)
  console.log(additionStr)

  if("addition" in options) {
    additionStr = additionStr + options.addition + options.additionSeparator
    additionStr = additionStr.repeat(options.additionRepeatTimes)
    additionStr = additionStr.slice(0, (additionStr.length - options.additionSeparator.length))
  }

  console.log(options.separator)
  console.log(options.additionSeparator)
  console.log(additionStr)
  newstr = str + additionStr + options.separator
  newstr = newstr.repeat(options.repeatTimes)
  newstr= newstr.slice(0, (newstr.length - options.separator.length))

  console.log(options.separator)
  console.log(options.additionSeparator)
  return (newstr)
}
let b = repeater('la', { repeatTimes: 3 })
console.log(b)
module.exports = {
  repeater
};
