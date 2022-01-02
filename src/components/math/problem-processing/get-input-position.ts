import randomInteger from '../randoms/get-random-integer-in-a-range';

/**
 * 
 */
const getInputPosition = (numberOfOperands: number, missing: string) => {

  try {

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

    return input;
  }
  catch (e: any) {
    throw new Error(e.message);
  }
};

export default getInputPosition;