import getInputPosition from "./get-input-position";
import operandsFactory from "./operands-factory";

import { IProblem } from "../../../../TS/interfaces/interfaces";
import { TArithmeticMissing } from "../../../../TS/types/types";
import { arithmeticOperandTypes } from "../../../../TS/constatnts/constants";

/**
 *
 */
function problemsFactory(
  name: string,
  type: string,
  operation: string,
  numberOfOperands = 2,
  missing: TArithmeticMissing | undefined,
  quantity: number
): IProblem[][] {
  let problems: IProblem[][] = [];

  try {
    const processor: (
      operation: string,
      numberOfOperands: number
    ) => number[] | undefined = operandsFactory(name, operation);

    let problem: IProblem[] = [];

    for (let q = 0; q < quantity; q++) {
      problem = [];
      const operands: number[] | undefined = processor(
        operation,
        numberOfOperands
      );

      if (!operands) {
        throw new Error("Wrong type of operands processor!");
      }

      problem.push({
        type: arithmeticOperandTypes.type,
        value: type,
      });

      if (type === "equation") {
        // 6. Identify missing. Only in case of equation
        let input = getInputPosition(numberOfOperands, missing);

        // 7. Formatting the problem with the defined operands and operator.
        for (let i = 0; i < operands.length; i++) {
          if (i > 0) {
            problem.push({
              type: arithmeticOperandTypes.sign,
              value: i === operands.length - 1 ? "=" : operation,
            });
          }
          problem.push({
            type:
              input === i
                ? arithmeticOperandTypes.input
                : arithmeticOperandTypes.operand,
            value: operands[i].toString(),
          });
        }

        problem.push({
          type: arithmeticOperandTypes.result,
          value: "",
        });
      }

      // if (type === "strip-diagram") {
      //   // 7. Formatting the problem with the defined operands and operator.
      //   problem.push({
      //     type: operation === "×" ? "product" : "input",
      //     value: operands[0].toString(),
      //   });
      //   problem.push({
      //     type: "factor",
      //     value: operands[1].toString(),
      //   });
      //   problem.push({
      //     type: operation === "×" ? "input" : "operand",
      //     value: operands[2].toString(),
      //   });

      //   problem.push({
      //     type: "type",
      //     value: type,
      //   });

      //   problem.push({
      //     type: "result",
      //     value: "",
      //   });
      // }

      problems.push(problem);
    }
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }
  return problems;
}

export default problemsFactory;
