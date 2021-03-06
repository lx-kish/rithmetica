/**
 * Returns difference of two given numbers
 * 
 * @minuend <string> -  the number from which you take something
 * @subtrahend <string> - the number that is subtracted
 * 
 */
const subtraction = (minuend: string, subtrahend: string) => {
  try {
    return parseInt(minuend) - parseInt(subtrahend);
  }
  catch (e) {
    throw new Error(e);
  }
};

export default subtraction;