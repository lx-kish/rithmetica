import randomInteger from '../../../../math/randoms/get-random-integer-in-a-range';

/**
 * 
 */
const singleDigitStripDiagram = (operation: string, numberOfOperands: number) => {
  
  const operands: number[] = [];

  try {

    // 1. Variable declarations
    let operand = 0;
    let product = 0;

    // 2. Generate the factor and push it into the operands array
    operand = randomInteger(2, 9);
    operands.push(operand);
    product = operand;
    
    // 3. Generate the operand and push it into the operands array
    operand = randomInteger(2, 9);
    operands.push(operand);

    // 4. Calculate the product
    product = product * operand;

    // 5. Push the product to the first place
    operands.splice(0, 0, product);

    return operands;
  }
  catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }
};

export default singleDigitStripDiagram;