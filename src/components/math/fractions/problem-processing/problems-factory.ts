import operandsFactory from "./operands-factory";
import IFractionsProblem from "../../../../TS/interfaces/IFractionsProblem";

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

    const processor: (operation: string, numberOfOperands: number) => number[] | undefined = operandsFactory(name, operation);


    let problem: IFractionsProblem[] = [];

    for (let q = 0; q < quantity; q++) {
      problem = [];
      const operands: number[] | undefined = processor(operation, numberOfOperands);

      if (!operands) {
        throw new Error("Wrong type of operands processor!");
      }

      if (type === "fractionsAddSubtract") {

        // 7. Add type.
        problem.push({
          type: "type",
          value: type
        });

        problem.push({
          type: "fraction",
          numerator: operands[0].toString(),
          denominator: operands[1].toString(),
        });

        problem.push({
          type: "sign",
          value: operation
        });

        problem.push({
          type: "fraction",
          numerator: operands[2].toString(),
          denominator: operands[3].toString(),
        });

        problem.push({
          type: "sign",
          value: "="
        });

        problem.push({
          type: "interim",
          numerator1: operands[4].toString(),
          sign: operation,
          numerator2: operands[5].toString(),
          denominator: operands[6].toString(),
        });

        problem.push({
          type: "sign",
          value: "="
        });

        if(operands[7] === 0 && operands[8] === 0) {
          problem.push({
            type: "resultInteger",
            integer: "0"
          });
        } else {
          problem.push({
            type: "result",
            integer: "",
            numerator: operands[7].toString(),
            denominator: operands[8].toString(),
          });
        }


        // first simplifying: extracting the integer part, or of no one, factoring then
        // operands[9] - integer part, operands[10] - fraction part
        if (operands[9] || operands[10] || operands[11]) {
          problem.push({
            type: "sign",
            value: "="
          });
        }

        if (operands[9]) {
          problem.push({
            type: "remainedInteger",
            integer: operands[9].toString(),
          })
        }

        if (operands[10] || operands[11]) {
          problem.push({
            type: "remained",
            numerator: operands[10].toString(),
            denominator: operands[11].toString(),
          })
        }

        // second simplifying: factoring if the first time it was an extraction of integer
        // operands[9] - integer part, operands[10] - fraction part
        if (operands[12] || operands[13] || operands[14]) {
          problem.push({
            type: "sign",
            value: "="
          });
        }

        if (operands[12]) {
          problem.push({
            type: "simplifiedInteger",
            integer: operands[12].toString(),
          })
        }

        if (operands[13] || operands[14]) {
          problem.push({
            type: "simplified",
            numerator: operands[13].toString(),
            denominator: operands[14].toString(),
          })
        }

        problem.push({
          type: "answers",
          interimNumerator1: "",
          interimNumerator2: "",
          interimDenominator: "",
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
          value: operands[0].toString(),
        });
        problem.push({
          type: "factor",
          value: operands[1].toString(),
        });
        problem.push({
          type: operation === "×" ? "input" : "operand",
          value: operands[2].toString(),
        });

        problem.push({
          type: "type",
          value: type
        });

        problem.push({
          type: "result",
          value: ""
        });

      }

      problems.push(problem);
    }

    return problems;
  }
  catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }
};

export default problemsFactory;