const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(springDate) {
  //if (springDate)
  try  {(springDate instanceof(Date))} catch(e)  {
    if (e instanceof Error) {
      throw new Error("Invalid date!");
    } else {
      throw e; // re-throw the error unchanged
    }
  }
  if (arguments.length == 0)  return ('Unable to determine the time of year!')
  
   try {
    springDate.getMonth();
  } catch (e) {
    if (e instanceof Error) {
      throw new Error("Invalid date!");
    } else {
      throw e; // re-throw the error unchanged
    }
  }

  try {
    springDate.getUTCMonth();
  } catch (e) {
    if (e instanceof Error) {
      throw new Error("Invalid date!");
    } else {
      throw e; // re-throw the error unchanged
    }
  }



 // if (springDate == "undefined")  return ('Unable to determine the time of year!')
  //if (arguments.length ==0 ) return ("Invalid date!")
  //if (!(springDate instanceof(Date))) return ("Invalid date!")
  //if (Date.parse(springDate) < 0) return ("Invalid date!")
  //
  currentMonth = springDate.getMonth()
  console.log(currentMonth)
  if (currentMonth <2 || currentMonth === 11 ) return "winter"
  else if (currentMonth <5) return "spring"
  else if (currentMonth <8) return "summer"
  else if (currentMonth <11) return "autumn"
}

module.exports = {
  getSeason
};
