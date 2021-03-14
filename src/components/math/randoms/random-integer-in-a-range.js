/**
 * Algorithm of generating a whole random numbers in a specific range
 * 
 * Based on discussion:
 * https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range 
 * 
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
module.exports = (incomeMin, incomeMax) => {
  try {
    const min = Math.ceil(parseInt(incomeMin));
    const max = Math.floor(parseInt(incomeMax));

    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    return random;
  }
  catch (e) {
    throw new Error(e);
  }
}