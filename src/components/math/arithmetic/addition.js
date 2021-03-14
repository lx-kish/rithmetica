/**
 * Returns sum of two given numbers
 * 
 * @augend <string> or <number> - the amount that you start off with
 * @addend <string> or <number> - the amount that you add
 * 
 */
module.exports = (augend, addend) => {
  try {
    return parseInt(augend) + parseInt(addend);
  }
  catch (e) {
    throw new Error(e);
  }
}