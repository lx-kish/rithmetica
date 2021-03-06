import randomInteger from '../randoms/get-random-integer-in-a-range';

/**
 * 
 */
const getInputPosition = (numberOfOperands: number, missing: string) => {

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
      input = randomInteger(0, numberOfOperands)
    } else if (missing === 'first') {
      input = 0;
    } else if (missing === 'last') {
      input = numberOfOperands - 1;
    } else if (missing === 'result') {
      input = numberOfOperands;
    }

    // console.log(
    //   '%c input from "get-input-position" ===> ',
    //   'color: orange; font-weight: bold;',
    //   input
    // );

    return input;
  }
  catch (e) {
    throw new Error(e);
  }
};

export default getInputPosition;