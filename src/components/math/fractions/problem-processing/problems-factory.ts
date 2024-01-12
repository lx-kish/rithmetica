import operandsFactory from "./operands-factory";
import IFractionsProblem from "../../../../TS/interfaces/IFractionsProblem";

import { FractionOperandsType } from "../../../../TS/types/FractionOperandsType";

/**
 *
 */
const problemsFactory = (
  name: string,
  type: string,
  operation: string,
  numberOfOperands = 2,
  quantity: number
) => {
  let problems: IFractionsProblem[][] = [];

  try {
    const processor: (
      operation: string,
      numberOfOperands: number
    ) => FractionOperandsType | undefined = operandsFactory(name, operation);

    let problem: IFractionsProblem[] = [];

    for (let q = 0; q < quantity; q++) {
      problem = [];
      const operands: FractionOperandsType | undefined = processor(
        operation,
        numberOfOperands
      );

      if (!operands) {
        throw new Error("Wrong type of operands processor!");
      }

      if (type === "fractionsAddSubtract") {
        // 7. Add type.
        problem.push({
          type: "type",
          value: type,
        });

        problem.push({
          type: "fraction",
          numerator: operands.firstNumerator, // [0]
          denominator: operands.firstDenominator, // [1]
        });

        problem.push({
          type: "sign",
          value: operation,
        });

        problem.push({
          type: "fraction",
          numerator: operands.secondNumerator, // [2]
          denominator: operands.secondDenominator, // [3]
        });

        problem.push({
          type: "sign",
          value: "=",
        });

        problem.push({
          type: "interim",
          numerator1: operands.interimNumerator1, // [4]
          sign: operation,
          numerator2: operands.interimNumerator2, // [5]
          denominator1: operands.interimDenominator1, // [6]
          denominator2: operands.interimDenominator2, // [7]
        });

        problem.push({
          type: "sign",
          value: "=",
        });

        if (
          operands.resultNumerator === 0 &&
          operands.resultDenominator === 0
        ) {
          problem.push({
            type: "resultInteger",
            integer: "0",
          });
        } else {
          problem.push({
            type: "result",
            integer: "",
            numerator: operands.resultNumerator,
            denominator: operands.resultDenominator,
          });
        }

        // first simplifying: extracting the integer part, or of no one, factoring then
        // operands[9] - integer part, operands[10] - fraction part
        if (
          operands.integer ||
          operands.remainedNumerator ||
          operands.remainedDenominator
        ) {
          problem.push({
            type: "sign",
            value: "=",
          });
        }

        if (operands.integer) {
          problem.push({
            type: "remainedInteger",
            integer: operands.integer,
          });
        }

        if (operands.remainedNumerator || operands.remainedDenominator) {
          problem.push({
            type: "remained",
            numerator: operands.remainedNumerator,
            denominator: operands.remainedDenominator,
          });
        }

        // second simplifying: factoring if the first time it was an extraction of integer
        // operands[9] - integer part, operands[10] - fraction part
        if (operands.simplifiedNumerator || operands.simplifiedDenominator) {
          problem.push({
            type: "sign",
            value: "=",
          });
        }

        if (
          operands.integer &&
          operands.simplifiedNumerator &&
          operands.simplifiedDenominator
        ) {
          problem.push({
            type: "simplifiedInteger",
            integer: operands.integer,
          });
        }

        if (operands.simplifiedNumerator || operands.simplifiedDenominator) {
          problem.push({
            type: "simplified",
            numerator: operands.simplifiedNumerator,
            denominator: operands.simplifiedDenominator,
          });
        }

        problem.push({
          type: "answers",
          interimNumerator1: "",
          interimNumerator2: "",
          interimDenominator1: "",
          interimDenominator2: "",
          resultInteger: "", // only for the x/y - x/y situations
          resultNumerator: "",
          resultDenominator: "",
          remainedInteger: "",
          remainedNumerator: "",
          remainedDenominator: "",
          simplifiedInteger: "",
          simplifiedNumerator: "",
          simplifiedDenominator: "",
        });
      }

      if (type === "percentageAddSubtract") {
        // 7. Formatting the problem with the defined operands and operator.
        problem.push({
          type: operation === "×" ? "product" : "input",
          value: operands.firstNumerator,
        });
        problem.push({
          type: "factor",
          value: operands.firstDenominator,
        });
        problem.push({
          type: operation === "×" ? "input" : "operand",
          value: operands.secondNumerator,
        });

        problem.push({
          type: "type",
          value: type,
        });

        problem.push({
          type: "result",
          value: "",
        });
      }

      problems.push(problem);
    }

    return problems;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }
};

export default problemsFactory;
