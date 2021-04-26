/**
 * Returns sum of two given numbers
 * 
 * @augend <string> - the amount that you start off with
 * @addend <string> - the amount that you add
 * 
 */
const addition = (augend: string, addend: string): number => {
  try {
    return parseInt(augend) + parseInt(addend);
  }
  catch (e) {
    throw new Error(e);
  }
};

export default addition;