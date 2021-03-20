const randomInteger = require('../randoms/get-random-integer-in-a-range');

/**
 * 
 */
module.exports = (numberOfOperands, missing) => {
  try {

    // console.log(
    //   '%c arguments of addition-problem-generator ===> ',
    //   'color: orangered; font-weight: bold;',
    //   problemType,
    //   numberOfOperands,
    //   numberOfProblems
    // );

    let input;

    if (missing === 'random') {
      input = randomInteger(0, parseInt(numberOfOperands))
    } else if (missing === 'first') {
      input = 0;
    } else if (missing === 'last') {
      input = parseInt(numberOfOperands) - 1;
    } else if (missing === 'result') {
      input = parseInt(numberOfOperands);
    }

    console.log('%c input from "get-input-position" ===> ', 'color: orange; font-weight: bold;', input);

    return input;
  }
  catch (e) {
    throw new Error(e);
  }
}