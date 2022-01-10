import getInputPosition from './get-input-position';
import operandsFactory from './operands-factory';

/**
 * 
 */
const problemsFactory = (
  name: string,
  type: string,
  operation: string,
  numberOfOperands = 2,
  missing: string,
  quantity: number
) => {  

  try {

    const processor: (operation: string, numberOfOperands: number) => number[] = operandsFactory(name, operation);

    let problems: { type: string; value: string }[][] = [];

    let problem: { type: string; value: string }[];

    for (let q = 0; q < quantity; q++) {

      problem = [];

      const operands: number[] = processor(operation, numberOfOperands);

      // 6. Identify missing. Only in case of equation
      let input = getInputPosition(numberOfOperands, missing);

      // 7. Formatting the problem with the defined operands and operator.
      for (let i = 0; i < operands.length; i++) {

        if (i > 0) {
          problem.push({
            type: "sign",
            value: i === operands.length - 1 ?
              "=" :
              operation
          });
        }
        problem.push({
          type: input === i ? "input" : "operand",
          value: operands[i].toString(),
        });
      }

      problem.push({
        type: "type",
        value: type
      });

      problem.push({
        type: "result",
        value: ""
      });

      problems.push(problem);
    }

    return problems;
  }
  catch (e: any) {
    throw new Error(e.message);
  }
};

export default problemsFactory;