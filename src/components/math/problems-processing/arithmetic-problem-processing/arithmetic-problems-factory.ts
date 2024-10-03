import getInputPosition from "./get-input-position";

import { IProblem } from "../../../../TS/interfaces/interfaces";
import {
  TArithmeticMissing,
  TRoutes,
  TSections,
} from "../../../../TS/types/types";
import {
  arithmeticMissing,
  arithmeticOperandTypes,
} from "../../../../TS/constatnts/constants";

import getProblemTypeBySignature from "../../../../utils/get-problem-type/get-problem-type";

/**
 *
 */
function arithmeticProblemsFactory(
  route: TRoutes,
  name: string,
  operation: string,
  numberOfOperands = 2,
  quantity: number,
  missing = arithmeticMissing.result as TArithmeticMissing,
  section?: TSections
): IProblem[][] {
  let problems: IProblem[][] = [];

  try {
    const problemType = getProblemTypeBySignature({
      name,
      operation,
      route,
    });

    if (!problemType)
      throw new Error(
        `Controller failed to find ptoblem type with signature: name: ${name}, operation: ${operation}, route: ${route}`
      );
    const processor = problemType.processor;

    if (!processor)
      throw new Error(
        `No processor for the task ${route} - ${name} - ${operation}`
      );

    for (let q = 0; q < quantity; q++) {
      const operands: number[] | undefined = processor(
        operation,
        numberOfOperands
      ) as number[];

      if (!operands) {
        throw new Error(
          `Wrong type of operands processor for the task ${route} - ${name} - ${operation}`
        );
      }

      let problem: IProblem[] = [];

      problem.push({
        type: arithmeticOperandTypes.type,
        route: route as string,
        name,
        operation,
      });

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

      problems.push(problem);
    }
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  } finally {
    return problems;
  }
}

export default arithmeticProblemsFactory;
