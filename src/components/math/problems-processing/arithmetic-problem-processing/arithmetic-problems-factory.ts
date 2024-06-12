import getInputPosition from "./get-input-position";

import { IProblem } from "../../../../TS/interfaces/interfaces";
import { TArithmeticMissing } from "../../../../TS/types/types";
import {
  arithmeticOperandTypes,
  routes,
} from "../../../../TS/constatnts/constants";

import processorInjector from "../processor-injector";

/**
 *
 */
function arithmeticProblemsFactory(
  name: string,
  type: string,
  operation: string,
  numberOfOperands = 2,
  quantity: number,
  missing: TArithmeticMissing | undefined
): IProblem[][] {
  let problems: IProblem[][] = [];

  try {
    const processor = processorInjector(name, operation, routes.arithmetic);

    if (!processor)
      throw new Error(
        `No processor for the task ${routes.arithmetic} - ${name} - ${operation}`
      );

    for (let q = 0; q < quantity; q++) {
      const operands: number[] | undefined = processor(
        operation,
        numberOfOperands
      ) as number[];

      if (!operands) {
        throw new Error(
          `Wrong type of operands processor for the task ${routes.fractions} - ${name} - ${operation}`
        );
      }

      let problem: IProblem[] = [];

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

export default arithmeticProblemsFactory;
