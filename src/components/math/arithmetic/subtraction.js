/**
 * Returns difference of two given numbers
 * 
 * @minuend <string> or <number> -  the number from which you take something
 * @subtrahend <string> or <number> - the number that is subtracted
 * 
 */
module.exports = (minuend, subtrahend) => {
  try {
    return parseInt(minuend) - parseInt(subtrahend);
  }
  catch (e) {
    throw new Error(e);
  }
}